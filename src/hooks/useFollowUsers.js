import { useState, useEffect } from "react";
import { arrayRemove, arrayUnion, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import { toast } from "react-toastify";

const useFollower = (userId) => {
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

  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const authUser = useAuthStore((state) => state.user)
  const setAuthUser = useAuthStore((state) => state.setUser)
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
  

  const handleFollowers = async () => {
    if (!authUser) return;
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });
      if (isFollowing) {
        const updatedFollowing = authUser.following.filter((uid) => uid !== userId);
        const updatedFollowers = userProfile.followers.filter((uid) => uid !== authUser.uid);
      
        setAuthUser({ ...authUser, following: updatedFollowing });
        setUserProfile({ ...userProfile, followers: updatedFollowers });
      
        localStorage.setItem("user-info", JSON.stringify({ ...authUser, following: updatedFollowing }));
        setIsFollowing(false);
      } else {
        const updatedFollowing = [...authUser.following, userId];
        const updatedFollowers = [...userProfile.followers, authUser.uid];
      
        setAuthUser({ ...authUser, following: updatedFollowing });
        setUserProfile({ ...userProfile, followers: updatedFollowers });
      
        localStorage.setItem("user-info", JSON.stringify({ ...authUser, following: updatedFollowing }));
        setIsFollowing(true);
      }
     
    } catch (error) {
      toast.error(`Error: ${error.message}`, toastOptions);
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      setIsFollowing(authUser.following.includes(userId));
    }
  }, [authUser, userId]);

  return { isUpdating, isFollowing, handleFollowers };
};

export default useFollower;
