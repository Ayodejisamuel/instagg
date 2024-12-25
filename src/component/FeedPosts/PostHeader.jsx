import { Image, Box, Text, Link, Flex, Avatar } from "@chakra-ui/react";
// import  Link  from "react-router-dom";

const PostHeader = ({username, avatar}) => {
  return (
    
      <Flex justifyContent={"space-between"} py={2} alignItems={"center"}>
        <Flex gap={2} alignItems={"center"}>
          <Avatar size="sm" src={avatar} alt={"profilepic"} />
          <Text fontSize={12} fontWeight={'bold'}>{username}</Text>
          <Text fontSize={12} color={"gray.500"}>
            .1w
          </Text>
        </Flex>
        <Box
          as={Link}
          fontSize={12}
          color={"blue.500"}
          _hover={{ color: "white", textDecoration: "none" }}
          transition={"0.2s ease-in-out"}
          fontWeight={"bold"}
        >
          unfollow
        </Box>
      </Flex>
  
  );
};

export default PostHeader;
