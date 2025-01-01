import { Box, Text, Flex, Image } from "@chakra-ui/react";

const GoogleAuth = () => {

    return(<>
    <Box w={'full'}>
           <Flex alignItems="center" my={4}>
                    <Box flex={2} h="1px" bg="gray.400" />
                    <Text mx={2} fontSize={14} fontWeight="bold">
                      OR
                    </Text>
                    <Box flex={2} h="1px" bg="gray.400" />
                  </Flex>
          
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
                    <Text color="blue.500">Log in with Google</Text>
                  </Flex>
          
        </Box></>)
}

export default GoogleAuth;