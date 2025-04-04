import { useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import userProfileStore from "../store/userProfileStore";
import uploadImageToCloudinary from "../utils/cloudinary"; // Import Cloudinary function.

const base64ToBlob = async (base64) => {
  const res = await fetch(base64);
  const blob = await res.blob();
  return new File([blob], "profile-image.png", { type: blob.type });
};

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
  
      // Debug: Check initial selected file
      console.log("Selected File:", selectedFile);
  
      // Convert Base64 to File if needed
      if (selectedFile) {
        let fileToUpload = selectedFile;
  
        if (typeof selectedFile === "string" && selectedFile.startsWith("data:image")) {
          console.log("Detected Base64, converting to Blob...");
          fileToUpload = await base64ToBlob(selectedFile);
        }
  
        console.log("Final File to Upload:", fileToUpload);
        console.log("File Type:", fileToUpload.type);
        console.log("Is File?:", fileToUpload instanceof File);
  
        // Upload to Cloudinary
        const uploadedImageUrl = await uploadImageToCloudinary(fileToUpload);
        if (uploadedImageUrl) profilePicURL = uploadedImageUrl;
      }
  
      // Prepare only updated fields
      const updatedFields = {
        ...(inputs.fullName && { fullName: inputs.fullName }),
        ...(inputs.userName && { userName: inputs.userName }),
        ...(inputs.bio && { bio: inputs.bio }),
        ...(profilePicURL !== authUser.profilePicURL && { profilePicURL }),
      };
  
      // Update Firestore if there are changes
      if (Object.keys(updatedFields).length > 0) {
        await updateDoc(doc(firestore, "users", authUser.uid), updatedFields);
      }
  
      // Update local state & storage
      const updatedUser = { ...authUser, ...updatedFields };
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
  
      console.log("Profile updated successfully!");
      toast.success("Successful: Upgrade plan for Media Uploads", toastOptions);
  
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
