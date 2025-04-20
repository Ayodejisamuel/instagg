import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { firestore } from "../firebase/firebase";
const SearchUser = () => {
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
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
  const getUserProfile = async (userName) => {
    setIsLoading(true)
    try {
      const q = query(
        collection(firestore, "users"),
        where("userName", "==", userName)
      );
      const querySnapShot = await getDocs(q);
      if (querySnapShot.empty)
        return toast.error(`No user found , toastOptions`);
      querySnapShot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      toast.error(`Error Fetching data ${error.message}`, toastOptions);
      setUser(null);
    } finally {
      setIsLoading(false);
      console.log('NOw')
    }
  };
  return { loading, getUserProfile, user };
};

export default SearchUser;
