import React, { useState } from "react";
import { Box, VStack, Image, Button, Flex, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const AuthForm = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} alt="instagram" />
          <Input placeholder="enter email" type="email" fontSize={14} />
          <Input placeholder="enter password" type="password" fontSize={14} />

          {!isLoggedIn ? (
            <Input
              placeholder="confirm password"
              type="password"
              fontSize={14}
            />
          ) : null}

          <Button width={"full"} fontSize={14} size={"sm"} colorScheme="blue">
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
            <Text>Log in with Google</Text>
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
            {isLoggedIn
              ? "Dont have an account? "
              : "Already have an account?"}
          </Box>
          <Box onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
      {/* <Box display={''}
        border={"1px solid gray"}
        my={2}
        borderRadius={4}
        padding={5}
        width={'full'}
      >
        <Flex
          cursor={"pointer"}
          gap={2}
          alignItems={"center"}
          justifyContent={'center'}
        >
          <Box fontSize={14} size={"sm"} color={"blue"}>
            {isLoggedIn ? "Dont have an account? " : "Already have an account"}

            <Box  onClick={() => setIsLoggedIn(!isLoggedIn)}  size={"sm"} color={"blue.500"}>
            {isLoggedIn ? "Sign up" : 'Log in '}
            </Box>
          </Box>
        </Flex>
      </Box> */}
    </>
  );
};

export default AuthForm;
