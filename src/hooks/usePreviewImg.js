import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const usePreviewImg = () => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000, 
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
      toast.error("No file selected. Please choose an image.", toastOptions);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setSelectedFile(null);
      toast.error("Invalid file type. Please upload an image.", toastOptions);
      return;
    }

    if (file.size > maxFileSize) {
      setSelectedFile(null);
      toast.error("File size exceeds 2MB. Choose a smaller image.", toastOptions);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setSelectedFile(reader.result);
    reader.readAsDataURL(file);
  };

  // Cleanup function to avoid memory leaks
  useEffect(() => {
    return () => setSelectedFile(null);
  }, []);

  const clearPreview = () => setSelectedFile(null);

  return { handleImageChange, selectedFile, setSelectedFile, clearPreview };
};

export default usePreviewImg;