import { useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import userProfileStore from "../store/userProfileStore";

const useEditProfile = () => {
  
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: {
      backgroundColor: "#2b3548",
      color: "#fff",
      fontSize: "16px",
      borderRadius: "10px",
    },
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  

  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = userProfileStore((state) => state.setUserProfile);

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;

    setIsUpdating(true);
    const storageRef = ref(storage, `profilePic/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);
    let profilePicURL = authUser.profilePicURL;

    try {
      // Upload profile picture if selected
      if (selectedFile && selectedFile instanceof File) {
        console.log("Selected file:", selectedFile);
const profilePicBase64 = await convertToBase64(selectedFile)
        await uploadString(storageRef, profilePicBase64, "data_url");
        profilePicURL = await getDownloadURL(storageRef);
      }

      // Prepare updated user data
      const updatedUser = { 
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        userName: inputs.userName || authUser.userName,
        bio: inputs.bio || authUser.bio,
        profilePicURL: profilePicURL || authUser.profilePicURL,
      };

      // Update Firestore document
      await updateDoc(userDocRef, updatedUser);

      // Update local state and storage
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      toast.success("Profile updated successfully", toastOptions);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error updating profile", toastOptions);
    } finally {
      setIsUpdating(false);
    }
  };

  return { editProfile, isUpdating };
};

export default useEditProfile;
