 // hooks/getUserProfile.js
import { query, where, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";

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
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return setUserProfile(null);
         else {
          let userDoc;

          querySnapshot.forEach((doc) => {
          userDoc = doc.data();
          });
        setUserProfile(userDoc);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
     getProfile();
  }, [username]);

  return { userProfile, isLoading, error };
};

export default useGetUserProfile;
