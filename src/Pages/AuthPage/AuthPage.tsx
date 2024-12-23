import React from "react";
import { Box, VStack, Image, Flex, Container } from "@chakra-ui/react";
import AuthForm from "../../component/AuthForm/AuthForm";


const AuthPage = () => {

    return (
        <>
        <Box border={'1px solid gray'} borderRadius={4} padding={1}>
        <Flex    
        maxH={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        px={4}
      >
        <Container maxW={"container.md"} padding={0}>
          <Flex gap={10} justifyContent={'center'} alignItems={'center'}>
            <Box display={{ base: "none", md: "block" }}>
              <Image src="auth.png" alt="phone-img" />
            </Box>
            <VStack>
           <AuthForm />
              {/* <Box>Get the App</Box> */}
              <Flex justifyContent={"center"} alignContent={"center"} gap={5}>
                <Image src="microsoft.png" h={"10"} alt={"playstore logo"} />
                <Image src='playstore.png' h={"10"} alt={"playstore logo"} />
              </Flex> 
            </VStack>
          </Flex>
        </Container>
      </Flex>
    
        </Box>
        </>
    )
}

export default AuthPage;