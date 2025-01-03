import { auth } from "../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
 const useSignOut = () => {
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
  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("user-info");
      toast.success("Logged out successfully", toastOptions);
 
      return true;
    } catch (error) {
      toast.error("Error logging out", toastOptions);
      return false;
    }
  };
    return { handleLogout };
};

export default useSignOut;
