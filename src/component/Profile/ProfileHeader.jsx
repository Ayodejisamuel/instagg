import { Flex, AvatarGroup, Avatar, VStack, Text, Button } from "@chakra-ui/react";
// import { span } from "framer-motion";

const ProfileHeader = ({ userProfile }) => {
  const { username, posts, followers, following, fullName, bio } = userProfile;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: 4, sm: 10 }}
      py={10}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        mx={"auto"}
        alignItems={"center"}
      >
        <Avatar
          name={username}
          src={userProfile.avatarUrl || "default-avatar-url.jpg"}
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} w={"full"} mx={"auto"} flex={1}>
        <Flex alignItems={"center"} justifyContent={{ base: "center", md: "center" }} gap={4}>
          <Text fontSize={{ base: "sm", md: "lg" }} color={"whiteAlpha"}>
            {username}
          </Text>
          <Button
            bg={"white"}
            color={"black"}
            size={{ base: "xs", md: "sm" }}
            _hover={{ bg: "whiteAlpha.800" }}
          >
            Edit Profile
          </Button>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", md: "center" }}
          gap={{ base: 2, sm: 4 }}
          fontSize={{ base: "xs", md: "sm" }}
        >
          <Text>
            <Text fontWeight={"bold"} mr={1}>
              {posts.length}
            </Text>
            Posts
          </Text>
          <Text>
            <Text fontWeight={"bold"} mr={2}>
              {followers.length}
            </Text>{" "}
            Followers
          </Text>
          <Text>
            <Text fontWeight={"bold"} mr={2}>
              {following}
            </Text>{" "}
            Following
          </Text>
        </Flex>
        <Flex justifyContent={{ base: "center", md: "center" }}>
          <Text fontSize={"sm"} color={"gray.500"}>
            {fullName}
          </Text>
        </Flex>
        <Flex justifyContent={{ base: "center", md: "center" }} fontSize={"sm"}>
          {bio || "This user has no bio yet."}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
