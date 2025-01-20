import { query, where, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { toast } from "react-toastify";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfile = (username) => {

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

  const { userProfile, setUserProfile } = useUserProfileStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(`Fetching profile for username: ${username}`);

        const q = query(
          collection(firestore, "users"),
          where("userName", "==", username) 
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
       toast.error('No username found', toastOptions)
          setUserProfile(null);
        } else {
          let userDoc;

          querySnapshot.forEach((doc) => {
            userDoc = doc.data();
          });

          setUserProfile(userDoc);
        }
      } catch (err) {
        toast.error("Error fetching user profile:", toastOptions);
        setError(err.message);
        toast.error(err.message, toastOptions);
      } finally {
        setIsLoading(false);
      }
    };

    if (username) getProfile();
  }, [username]);

  return { userProfile, isLoading, error };
};

export default useGetUserProfile;