import React from "react";
import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";
import { base } from "framer-motion/client";
import AuthForm from "../../component/AuthForm/AuthForm";
import { Input } from "@chakra-ui/react";


const HomePage = () => {
  return (
    <>
     <Flex    
        maxH={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        px={4}
      >
        <Container maxW={"container.md"} padding={0}>
          <Flex gap={10} justifyContent={'center'} alignItems={'center'}>
            <Box display={{ base: "none", md: "block" }}>
              <Image src="/auth.png" alt="phone-img" />
            </Box>
            <VStack>
           <AuthForm />
              <Box>Get the App</Box>
              <Flex justifyContent={"center"} alignContent={"center"} gap={5}>
                <Image src="/microsoft.png" h={"10"} alt={"playstore logo"} />
                <Image src='/playstore.png' h={"10"} alt={"playstore logo"} />
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default HomePage;
