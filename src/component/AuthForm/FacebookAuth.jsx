import { Divider, Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, firestore } from "../../firebase/firebase";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";


const FacebookAuth = () => {
  const [signInWithFacebook, error] = useSignInWithFacebook(auth);
  const loginUser = useAuthStore((state) => state.login);


  const handleFaceBookAuth = async () => {

    try {
      const newUser = await signInWithFacebook();
      console.log('Auth result', newUser);
      if(!newUser){
        throw new Error('Failed to login')
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          fullName: input.fullName,
          userName: newUser.user.email.split("@")[0],
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: serverTimestamp(),
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } 
    catch (error) {
      toast.error("could not login with Facebook", error);
    }
  };

  return (
    <>
      <Button
        w={"full"}
        onClick={handleFaceBookAuth}
        fontSize={14}
        size={"sm"}
        _hover={{ backgroundColor: "rgb(0, 149, 246)" }}
        backgroundColor={"rgb(0, 149, 246)"}
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
          <Text>Log in with Facebook</Text>
          <Box></Box>
        </Flex>
      </Button>
      <Flex alignItems={"center"}>
        <Divider h={"3rem"} />
        <Text>OR</Text>
        <Divider h={"3rem"} />
      </Flex>
    </>
  );
};

export default FacebookAuth;
