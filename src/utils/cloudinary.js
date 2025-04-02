import axios from "axios";

const uploadImageToCloudinary = async (file) => {
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dfkiftgfj/image/upload";  
  const UPLOAD_PRESET = "ml_default"; // Set in Cloudinary settings

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", 'ml_default');

    const response = await axios.post(CLOUDINARY_URL, formData);
    alert(response.data)

    return response.data.secure_url; // This is the uploaded image URL
  } catch (error) {
    console.log("Cloudinary Upload Error:", error);
    return null;
  }
};

export default uploadImageToCloudinary;
