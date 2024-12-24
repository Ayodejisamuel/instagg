import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../../component/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Flex gap={20}>
          <Box flex={3} ml={20} py={10} >
            <FeedPosts />
          </Box>
          <Box
            flex={2}
            mr={20}
  
            py={5}
            maxW={"300px"}
            display={{ base: "none", md: "block" }}
          >
            Suggested
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
