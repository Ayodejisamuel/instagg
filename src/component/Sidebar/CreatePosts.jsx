import React from "react";
import { Tooltip,Box, Text  } from "@chakra-ui/react";
import { CreatePostLogo } from "react-icons/ai";
import  {Link }  from "react-router-dom";
const CreatePost = () => {

return (
    <div>
<Tooltip
             label={'Home'}
              placement="right"
              openDelay={500}
              hasArrow
              ml={1}
              display={{ base: "block", md: "none" }}
            >
              <Box
                as={Link}
                to={"/"}
                display="flex"
                justifyContent={{ base: "center", md: "left" }}
                alignItems="center"
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}                borderRadius={6}
                p={2}
              >
 <CreatePostLogo />
                <Text display={{ base: "none", md: "block" }} fontSize="sm">
                  Create
                </Text>
              </Box>
            </Tooltip>        
    </div>
)
}


export default  CreatePost;