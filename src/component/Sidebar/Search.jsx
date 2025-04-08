import React from "react";
import { Tooltip,Box, Text  } from "@chakra-ui/react";
import {  SearchLogo} from "../../assets/constants";
import  {Link }  from "react-router-dom";

const  Search = () => {

return (
    <div>
<Tooltip
             label={'Notifications'}
              placement="right"
              openDelay={500}
              hasArrow
              ml={1}
              display={{ base: "block", md: "none" }}
            >
              <Box
                as={Link}
                to={"/nofications"}
                display="flex"
                justifyContent={{ base: "center", md: "left" }}
                alignItems="center"
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}                borderRadius={6}
                p={2}
              >
 <SearchLogo />
 
                <Text display={{ base: "none", md: "block" }} fontSize="sm">
                  Search
                </Text>
              </Box>
            </Tooltip>        
    </div>
)
}


export default Search ;