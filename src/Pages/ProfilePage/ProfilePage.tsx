import { AvatarGroup, Avatar, Flex, Container } from "@chakra-ui/react";
import ProfileHeader from "../../component/Profile/ProfileHeader";
import ProfilePost from "../../component/Profile/ProfilePosts";
import ProfileTabs from "../../component/Profile/ProfileTabs";
import React from "react";
const ProfilePage = () => {
  return (
    <Container maxW="container.lg" py={2}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        direction={"column"}
      >
        <ProfileHeader />
      </Flex>
      <Flex px={{base: 2, sm: 4}} borderTop={"1px solid "} color={"whiteAlpha.300"} w={"full"} direction={'column'}>
        <ProfileTabs />
        <ProfilePost />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
