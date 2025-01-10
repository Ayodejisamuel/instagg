import { Button,Flex, Image, Text, Divider } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase";
const GoogleAuth = () => {

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


  const [signInWithGoogle,loading, error] = useSignInWithGoogle(auth);
 const loginUser = useAuthStore(state => state.login)

  const handleGoogleAuth = async () => {

    try {
      const newUser = await signInWithGoogle();

      if(!newUser && error) {
        toast.error(`user not found`, toastOptions)
        return
      }

    if(newUser) {
            const userDoc = {
              uid: newUser.user.uid,
              email: newUser.user.email,
              fullName: newUser.user.displayName,
              userName: newUser.user.email.split('@')[0],
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
          }
           
    } catch (error) {
      toast.error( `user not found`, toastOptions)
    }

  }
  return (
    <>
      <Button
        w="full"
        onClick={handleGoogleAuth}
        fontSize={14}
        size="sm"
        _hover={{ backgroundColor: "rgb(219, 68, 55)" }}
        backgroundColor="rgb(219, 68, 55)"
        isLoading={loading}
      >
        <Flex
          alignItems="center"
          cursor="pointer"
          justifyContent="center"
          w="full"
          gap={2}
          my={4}
        >
          <Image
            src="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358629/google_oxrv4j.png"
            alt="Google Icon"
            width={5}
          />
          <Text>Sign in with Google</Text>
        </Flex>
      </Button>
      <Flex alignItems="center">
        <Divider h="3rem" />
        <Text>OR</Text>
        <Divider h="3rem" />
      </Flex>
    </>
  );
};

export default GoogleAuth;
