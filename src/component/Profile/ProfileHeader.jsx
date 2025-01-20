 import { Flex, AvatarGroup, Avatar, VStack, Text, Button } from "@chakra-ui/react";

const ProfileHeader = ({ userProfile }) => {
  const { userName, posts = [], followers = [], following = 0, fullName, bio, avatarUrl } = userProfile;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: 4, sm: 10 }}
      py={10}
    >
      {/* Avatar Group */}
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf="center"
        mx="auto"
        alignItems="center"
      >
        <Avatar
          name={userName}
          src={avatarUrl || "default-avatar-url.jpg"}
        />
      </AvatarGroup>

      {/* User Info Section */}
      <VStack align="start" gap={2} w="full" mx="auto" flex={1}>
        {/* Username and Edit Button */}
        <Flex align="center" justify={{ base: "center", md: "center" }} gap={4}>
          <Text fontSize={{ base: "sm", md: "lg" }} color="whiteAlpha.900">
            {userName}
          </Text>
          <Button
            bg="white"
            color="black"
            size={{ base: "xs", md: "sm" }}
            _hover={{ bg: "whiteAlpha.800" }}
          >
            Edit Profile
          </Button>
        </Flex>

        {/* Stats Section */}
        <Flex
          align="center"
          justify={{ base: "center", md: "center" }}
          gap={{ base: 2, sm: 4 }}
          fontSize={{ base: "xs", md: "sm" }}
        >
          <Text>
            <Text as="span" fontWeight="bold" mr={1}>
              {posts.length}
            </Text>
            Posts
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" mr={1}>
              {followers.length}
            </Text>
            Followers
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" mr={1}>
              {following}
            </Text>
            Following
          </Text>
        </Flex>

        {/* Full Name */}
        <Flex justify={{ base: "center", md: "center" }}>
          <Text fontSize="sm" color="gray.500">
            {fullName}
          </Text>
        </Flex>

        {/* Bio */}
        <Flex justify={{ base: "center", md: "center" }} fontSize="sm">
          {bio || "This user has no bio yet."}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
