const uploadImageToCloudinary = async (base64String) => {
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dfkiftgfj/image/upload";
  const UPLOAD_PRESET = "ml_default"; // Ensure this preset exists in your Cloudinary settings

  try {
    // Convert Base64 to a File
    const file = await base64ToBlob(base64String);
    
    // Prepare the form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    // Send the request using fetch()
    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    // Parse the response as JSON
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Cloudinary Error: ${data.error?.message || "Unknown error"}`);
    }

    console.log("Cloudinary Upload Response:", data);
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};

export default uploadImageToCloudinary;
