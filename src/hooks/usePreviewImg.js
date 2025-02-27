import { useState } from "react";
import { toast } from "react-toastify";

const usePreviewImg = () => {

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

  const maxFileSize = 2 * 1024 * 1024; // 2MB limit
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      toast.error("No file selected", toastOptions);
      return;

    }

    if (!file || !file.type.startsWith("image/" || file.size > maxFileSize)) {
setSelectedFile(null) // clear previous file
      toast.error("Please upload a valid image file", toastOptions);
      return;
    }
    
    if (file.size > maxFileSize) {
      toast.error("File size must be less than 2MB", toastOptions);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setSelectedFile(reader.result);
    reader.readAsDataURL(file);
  };

  const clearPreview = () => setSelectedFile(null);

  return { handleImageChange, selectedFile, setSelectedFile, clearPreview };
};

export default usePreviewImg;