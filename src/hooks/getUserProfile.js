import { query, where, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { toast } from "react-toastify";

const useGetUserProfile = (username) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
console.log(username)
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log(userProfile)
          setUserProfile();
        
        } else {
          let userDoc;
       
          querySnapshot.forEach((doc) => {
            console.log(doc.data())
            userDoc = doc.data();
  
          });
          setUserProfile(userDoc);
        }
      } catch (err) {
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
