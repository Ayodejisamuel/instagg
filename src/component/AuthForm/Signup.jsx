import React, { useState } from "react";
import { Box, VStack, Image, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: "8000ms",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!input.email || !input.password || !input.confirmPassword) {
      toast.error("All fields are required", toastOptions);
      return;
    }
    if (input.password !== input.confirmPassword) {
      toast.error("Passwords do not match", toastOptions);
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
        <Input
          onChange={handleChange}
          name="confirmPassword"
          value={input.confirmPassword}
          placeholder="Confirm password"
          type="password"
          fontSize={14}
        />
        <Button
          onClick={handleSignup}
          width={"full"}
          fontSize={14}
          size={"sm"}
          colorScheme="blue"
        >
          Sign up
        </Button>
      </VStack>
    </Box>
  );
};

export default Signup;
