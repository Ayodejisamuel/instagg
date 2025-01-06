import { auth } from "../firebase/firebase"; 
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useAuthStore from "../store/authStore";
import { toast } from "react-toastify";
const useLogin = () => {
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
      const [
        signInWithEmailAndPassword,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const loginUser = useAuthStore(state => state.login)

 const Login = async (input) => {
    if(!input.email || !input.password) {
        toast.error("All fields are required", toastOptions)
        return;
    }
    try {   
        const userLogin = await  signInWithEmailAndPassword(input.email, input.password)
            if(!userLogin) {
                toast.error("Invalid email or password", toastOptions)
                return;
            }
        if(userLogin) {

            const loginDoc = doc(firestore, "users", userLogin.user.uid);
        const loginSnap = await getDoc(loginDoc);
        localStorage.setItem('user-info', JSON.stringify(loginSnap.data()))
        loginUser(loginSnap.data())
        }
        

       
    } catch (error) {
      toast.error(error.message, toastOptions)
    }
 }

 return {Login, loading, error}
    
}
export default useLogin