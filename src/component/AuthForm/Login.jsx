import React, { useState } from "react";
import { Box, VStack, Image, Button, Input, } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

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

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!input.email || !input.password) {
      toast.error("All fields are required", toastOptions);
      return;
    }
    navigate("/");
  };

  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image
          src="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358629/logo_duz9yo.png"
          h={24}
          alt="instagram"
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
          name="password"
          value={input.password}
          placeholder="Enter password"
          type="password"
          fontSize={14}
        />
        <GoogleAuth />
        <Button
          onClick={handleLogin}
          width={"full"}
          fontSize={14}
          size={"sm"}
          colorScheme="blue"
        >
          Log in
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
