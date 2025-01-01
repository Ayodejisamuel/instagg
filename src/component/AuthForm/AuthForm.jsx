import React, { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Signup";
import Login from "./Login";

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Box
        p={4}
        maxW="400px"
        mx="auto"
        mt={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="gray.700"
        color="white"
      >
        {isLoggedIn ? <Login /> : <Signup />}

       
        <Box
          border="1px solid gray"
          my={2}
          borderRadius={4}
          padding={5}
          width="full"
        >
          <Flex
            cursor="pointer"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              {isLoggedIn
                ? "Don't have an account? "
                : "Already have an account?"}
            </Box>
            <Box color="blue.500" onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? "Sign up" : "Log in"}
            </Box>
          </Flex>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};

export default AuthForm;
