import { Flex, Avatar, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} w={'full'} py={2} alignItems={"center"}>
      <Flex gap={4} alignItems={'center'} >
        <Avatar size="sm" src="/instagg/profilepic.jpg" alt={"profilepic"} />
        <Text fontSize={12} fontWeight={"bold"}>
        determinant
        </Text>
      
      </Flex>
      <Box
          as={Link}
          to={"/auth"}
          fontSize={12}
          color={"blue.500"}
          _hover={{ color: "white", textDecoration: "none" }}
          transition={"0.2s ease-in-out"}
          fontWeight={"bold"}
        >
          Log out
        </Box>
    </Flex>
  );
};
export default SuggestedHeader;
