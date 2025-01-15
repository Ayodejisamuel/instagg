import {
  Flex,
  AvatarGroup,
  Avatar,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { span } from "framer-motion/client";
 import useUserProfileStore from "../../store/userProfileStore";

const ProfileHeader = (userProfile) => {
 const {username } = useUserProfileStore()
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
          name="determinant_"
          src="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/profilepic_sbwsbl.jpg"
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} w={"full"} mx={"auto"} flex={1}>
        <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", md: "center" }}
        mx={{ base: "auto", md: "1" }}
        
           gap={4}
        >
          <Text fontSize={{ base: "sm", md: "lg" }} color={"whiteAlpha"}>
    {username.username}
          </Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              size={{ base: "xs", md: "sm" }}
              _hover={{ bg: "whiteAlpha.800" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", md: "center" }}
          mx={{ base: "auto", md: "1" }}
          // w={'full'}
          gap={{ base: 2, sm: 4 }}
          fontSize={{ base: "xs", md: "sm" }}
        >
          <Text>
            <Text as={span} fontWeight={"bold"} mr={1}>
              {username.posts.length}
            </Text>
            Posts
          </Text>
          <Text>
            <Text as={span} fontWeight={"bold"} mr={2}>
              {username.followers.length}
            </Text>{" "}
            Followers
          </Text>
          <Text>
            <Text as={span} fontWeight={"bold"} mr={2}>
              {username.following}
            </Text>{" "}
            Following
          </Text>
        </Flex>
        <Flex
          justifyContent={{ base: "center", md: "center" }}
          mx={{ base: "auto", md: "1" }}
        >
          <Text fontSize={"sm"} color={"gray.500"}>
            {username.fullName}
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            {"2025"}
          </Text>
        </Flex>
        <Flex
           justifyContent={{ base: "center", md: "center" }}
           mx={{ base: "auto", md: "1" }}
          fontSize={"sm"}
        >
          {username.bio || username}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
