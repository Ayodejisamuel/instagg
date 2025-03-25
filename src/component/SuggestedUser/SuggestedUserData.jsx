import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

const SuggestedUserData = ({name, avatar, followers}) => {

    return (
        <Flex w={"full"} py={1} alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={3} alignItems={"center"}>
          <Avatar size="sm" src={avatar} alt={"profilepic"} />
          <Box>
            <Text fontSize={"sm"} fontWeight={"bold"}>
           {name}
            </Text>
            <Text fontSize={"xs"} color={"gray.500"}>
             {followers} followers
            </Text>
          </Box>
        </Flex>
        <Box
          // as={Link}
          to={""}
          fontSize={12}
          color={"blue.500"}
          _hover={{ color: "white", textDecoration: "none" }}
          transition={"0.2s ease-in-out"}
          fontWeight={"bold"}
        >
          Follow
        </Box>
      </Flex>
    )
}

export default SuggestedUserData;