import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { firestore } from '../firebase/firebase';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import useAuthStore from '../store/authStore';
import { collection,query, where, getDocs } from 'firebase/firestore';
 

const useEmailSignup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  // Define toast options
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

const loginUser = useAuthStore(state => state.login)
  const signup = async (input) => {
  
    try {
      // Validate input fields
      if (!input.email || !input.password || !input.fullName || !input.userName) {
        toast.error("All fields are required", toastOptions);
        return;
      }
         
  // check if username already exist
  const usersRef = collection(firestore, "users");

  // Create a query against the collection.
  const q = query(usersRef, where("userName", "==", input.userName));
  const querySnapshot = await getDocs(q)
  
      if(!querySnapshot.empty) {
        toast.error("Username already exist choose another", toastOptions);
          return 

      }
      // Create user with email and password
      const newUser = await createUserWithEmailAndPassword(input.email, input.password);

      if (!newUser?.user) {
        if (error) {
          toast.error(`Signup Error: ${error.message}`, toastOptions);
        }
        return;
      }
        // Prepare user data for Firestore
      if(newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: input.email,
          fullName: input.fullName,
          userName: input.userName,
          bio: '',
          profilePicURL: '',
          followers: [],
          following: [],
          posts: [],
          createdAt: serverTimestamp(),

        };
        
        // Save user data to Firestore

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);

        // Save minimal data to local storage
        // Notify the user of successful signup
        toast.success("Signup successful! Redirecting...", toastOptions);
      }
     
    } catch (err) {
      console.error("Firestore error:", err);
      toast.error(`Signup failed: ${err.message}`, toastOptions);
    }
  };

  return {
    loading,
    error,
    signup,
  };
};

export default useEmailSignup;
