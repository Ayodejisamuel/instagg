import React, { useState } from "react";
import { Box, VStack, Image, Button, Flex, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
    setInput({...input, [e.target.name] : [e.target.value]})

  }
  const handleAuth = () => {
    if(!input.email || !input.password || !input.confirmPassword) {
      toast.error("All fields are required", toastOptions);
      return;
      
    }
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} alt="instagram" />
          <Input
          onChange={handleChange}
            name="email"
            value={input.email}
            placeholder="enter email"
            type="email"
            fontSize={14}
          />
          <Input
          onChange={handleChange}
            name="password"
            value={input.password}
            placeholder="enter password"
            type="password"
            fontSize={14}
          />

          {!isLoggedIn ? (
            <Input
            onChange={handleChange}
              name="confirmPassword"
              value={input.confirmPassword}
              placeholder="confirm password"
              type="password"
              fontSize={14}
            />
          ) : null}

          <Button
            onClick={handleAuth}
            width={"full"}
            fontSize={14}
            size={"sm"}
            colorScheme="blue"
          >
            {isLoggedIn ? "Log in" : "Sign up"}
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            w={"full"}
            gap={2}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text fontSize={14} fontWeight={"bold"} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            justifyContent={"center"}
            w={"full"}
            gap={2}
          >
            <Image src="/google.png" width={5} />
            <Text color={"blue.500"}>Log in with Google</Text>
          </Flex>
        </VStack>
      </Box>

      <Box
        display={""}
        border={"1px solid gray"}
        my={2}
        borderRadius={4}
        padding={5}
        width={"full"}
      >
        <Flex
          cursor={"pointer"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            {isLoggedIn ? "Dont have an account? " : "Already have an account?"}
          </Box>
          <Box color={"blue.500"} onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
      <ToastContainer />
    </>
  );
};

export default AuthForm;
