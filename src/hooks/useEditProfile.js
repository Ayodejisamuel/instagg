import { useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import userProfileStore from "../store/userProfileStore";
import uploadImageToCloudinary from "../utils/cloudinary"; // Import Cloudinary function

const useEditProfile = () => {

  // console.log('edit profile funcion is runnin')
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: { backgroundColor: "#2b3548", color: "#fff", fontSize: "16px", borderRadius: "10px" },
  };

  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = userProfileStore((state) => state.setUserProfile);

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    try {
      let profilePicURL = authUser.profilePicURL;
    
      // Upload new profile picture if provided
      if (selectedFile && selectedFile instanceof File) {
      
        console.log(selectedFile)
        const uploadedImageUrl = await uploadImageToCloudinary(selectedFile);
      
        console.log("Uploaded Image URL:", uploadedImageUrl);
        
        if (uploadedImageUrl) profilePicURL = uploadedImageUrl;
      }

      // Prepare only updated fields
      const updatedFields = {
        ...(inputs.fullName && { fullName: inputs.fullName }),
        ...(inputs.userName && { userName: inputs.userName }),
        ...(inputs.bio && { bio: inputs.bio }),
        ...(profilePicURL !== authUser.profilePicURL && { profilePicURL }),
      };

      // Update Firestore only with changed fields
      if (Object.keys(updatedFields).length > 0) {
        await updateDoc(doc(firestore, "users", authUser.uid), updatedFields);
      }

      // Merge new fields with current user
      const updatedUser = { ...authUser, ...updatedFields };

      // Update local state & storage
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      console.log('edit profile funcion is runnin')
      console.log(selectedFile)
      toast.success("Profile updated successfully", toastOptions);

    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile", toastOptions);
    } finally {
      setIsUpdating(false);
    }
  };

  return { editProfile, isUpdating };
};

export default useEditProfile;
