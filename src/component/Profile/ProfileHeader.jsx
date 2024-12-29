import {
  Flex,
  AvatarGroup,
  Avatar,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { span } from "framer-motion/client";

const ProfileHeader = () => {
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
            determinant_
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
              34
            </Text>
            Posts
          </Text>
          <Text>
            <Text as={span} fontWeight={"bold"} mr={2}>
              455
            </Text>{" "}
            Followers
          </Text>
          <Text>
            <Text as={span} fontWeight={"bold"} mr={2}>
              56
            </Text>{" "}
            Following
          </Text>
        </Flex>
        <Flex
          justifyContent={{ base: "center", md: "center" }}
          mx={{ base: "auto", md: "1" }}
        >
          <Text fontSize={"sm"} color={"gray.500"}>
            {"@determinant_"}
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
          Travel and Discover More'
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
