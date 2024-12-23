import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";


const AuthPage = () => {

    return (
        <>
        <Box border={'1px solid gray'} borderRadius={4} padding={5}>
<VStack spacing={4} >
    <Image src='/logo.png'h={24} alt="instagram" />


</VStack>
        </Box>
        </>
    )
}

export default AuthPage;