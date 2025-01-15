import { Flex, Text, Box } from "@chakra-ui/react";
import { BsGrid3X3 } from "react-icons/bs";

const ProfileTabs = (userProfle) => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      color={"white"}
      mb={'5'}
    >
      <Flex
        borderTop={"1px solid white"}
        p="3"
        gap={1}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <Box>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Posts
        </Text>
      </Flex>

      <Flex
        borderTop={"1px solid white"}
        p="3"
        gap={1}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <Box>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Saved
        </Text>
      </Flex>

      <Flex
        borderTop={"1px solid white"}
        p="3"
        gap={1}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <Box>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Likes
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
