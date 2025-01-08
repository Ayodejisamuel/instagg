import { auth } from "../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import { toast } from "react-toastify";

const useLogin = () => {
  // Toast notification options
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

  // Firebase hook for sign-in
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Auth store function to set the user
  const loginUser = useAuthStore((state) => state.login);

  // Login function
  const login = async (input) => {
    if (!input.email || !input.password) {
      toast.error("All fields are required", toastOptions);
      return;
    }

    try {
      // Authenticate the user with Firebase
      const userLogin = await signInWithEmailAndPassword(
        input.email,
        input.password
      );

      if (userLogin) {
        // Get the user's UID
        const userId = userLogin.user.uid;

        // Retrieve user data from Firestore
        const loginDoc = doc(firestore, "users", userId);
        const loginSnap = await getDoc(loginDoc);

        if (loginSnap.exists()) {
          const userData = loginSnap.data();
          // Store user data in localStorage
          localStorage.setItem("user-info", JSON.stringify(userData));
          // Update the global state
          loginUser(userData);
        } else {
          toast.error("User data not found in Firestore", toastOptions);
        }
      } else {
        toast.error("Invalid email or password", toastOptions);
      }
    } catch (error) {
      toast.error(error.message, toastOptions);
    }
  };

  return { login, loading, error };
};

export default useLogin;
