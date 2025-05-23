import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import FeedData from "../../component/FeedPosts/FeedData";
import SuggestedUsers from "../../component/SuggestedUser/SuggestedUsers";


const HomePage = () => { 
  return (
    
      <Container maxW={"container.lg"}>
        <Flex gap={20}>
          <Box flex={3} py={{ base: 5, md: 12 }}>
            <FeedData />
          </Box>
          <Box
            flex={2}
            mr={20}
            py={5}
            maxW={"300px"}
            display={{ base: "none", md: "block" }}
          >
            <SuggestedUsers />
          </Box>
        </Flex>
      </Container>
  
  );
};

export default HomePage;
