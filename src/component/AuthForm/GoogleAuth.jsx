import {Divider,AbsoluteCenter, Box, Text, Flex, Image, Button} from "@chakra-ui/react";

const GoogleAuth = () => {

    return(<>

    <Button w={'full'}    fontSize={14}
          size={"sm"}
          _hover={{backgroundColor: 'rgb(0, 149, 246)'}}
          backgroundColor={'rgb(0, 149, 246)'}>
           
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
                    <Text >Log in with Facebook</Text>
                    <Box></Box>
 

                  </Flex>
          
        </Button>
        <Flex  alignItems={'center'} >
  <Divider  h={'3rem'}/>
  <Text>
    OR
  </Text>
  <Divider  h={'3rem'}/>
</Flex>
        </>)
}

export default GoogleAuth;