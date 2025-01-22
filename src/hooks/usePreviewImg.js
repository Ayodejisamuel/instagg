import { useState } from "react";
import { toast } from "react-toastify"

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
      const maxFileSize = 2 * 1024 * 1024;
      const [selectedFile, setSelectedFile ] = useState(null)

const handleImageChange = (e) => {

    const file = e.target.files[0]
    if (file && file.type.startswith('image/')) {
        if(file.size > maxFileSize) {
            toast.error('file size must be less than 2MB', toastOptions);
            setSelectedFile(null)
            return
        }
        const reader = new FileReader()

        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }
            reader.readAsDataURL(file)
    }else {
        toast.error('please upload image file', toastOptions)
        setSelectedFile(null)
    }

}
return {handleImageChange, selectedFile, setSelectedFile}
}

export default usePreviewImg