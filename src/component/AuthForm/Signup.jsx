import React, { useState } from "react";
import {
  Box,
  VStack,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useEmailSignup from "../../hooks/useEmailSignup";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const { signup, loading, error } = useEmailSignup();
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { signup, loading, error } = useEmailSignup();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark", // Or any of the predefined themes
    style: {
      backgroundColor: "#2b3548", // Custom background color (e.g., green)
      color: "#fff",              // Text color
      fontSize: "16px",           // Custom font size
      borderRadius: "10px",       // Custom border radius
    },
  };
  

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSignup = () => {
    if (input.password !== input.confirmPassword) {
      toast.error("Passwords do not match", toastOptions);
      return;
    }
    signup(input).then(() => {
      navigate("/");
    });
  }
  
// const handleSignup = async () => {
//   const { email, fullName, userName, password, confirmPassword } = input;

//   if (!email || !fullName || !userName || !password || !confirmPassword) {
//     toast.error("All fields are required", toastOptions);
//     return;
//   }

//   if (password !== confirmPassword) {
//     toast.error("Passwords do not match", toastOptions);
//     return;
//   }

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // You can add the additional details (e.g., fullName, userName) to your database
//     toast.success("Signup Successful!", toastOptions);
//     navigate("/");
//   } catch (error) {
//     toast.error(`Signup failed: ${error.message}`, toastOptions);
//   }
// };
  return (
    <Box border="1px solid gray" borderRadius={4} padding={5}>
      <ToastContainer />
      <VStack spacing={4}>
        <Image
          src="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358629/logo_duz9yo.png"
          h={24}
          alt="Logo"
          fallback={<Box>Logo</Box>}
        />
        <Input
          onChange={handleChange}
          name="email"
          value={input.email}
          placeholder="Enter email"
          type="email"
          fontSize={14}
        />
        <Input
          onChange={handleChange}
          name="fullName"
          value={input.fullName}
          placeholder="Enter full name"
          type="text"
          fontSize={14}
        />
        <Input
          onChange={handleChange}
          name="userName"
          value={input.userName}
          placeholder="Enter username"
          type="text"
          fontSize={14}
        />
        <InputGroup>
          <Input
            onChange={handleChange}
            name="password"
            value={input.password}
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            fontSize={14}
          />
          <InputRightElement h="full">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShowPassword}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Input
            onChange={handleChange}
            name="confirmPassword"
            value={input.confirmPassword}
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            fontSize={14}
          />
         <Button onClick={handleSignup} fontSize={'sm'} w={'full'} isLoading={loading} colorScheme="blue">
          Sign Up
        </Button>
        {error && <p>Error: {error.message}</p>}
      </VStack>
      <ToastContainer />
    </Box>
  );
};

export default Signup;
