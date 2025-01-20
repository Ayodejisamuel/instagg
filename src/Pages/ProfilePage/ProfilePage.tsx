import { Flex, Container, Text } from "@chakra-ui/react";
import ProfileHeader from "../../component/Profile/ProfileHeader";
import ProfilePost from "../../component/Profile/ProfilePosts";
import ProfileTabs from "../../component/Profile/ProfileTabs";
import useGetUserProfile from "../../hooks/getUserProfile";
 import useUserProfileStore from '../../store/userProfileStore';
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, error } = useGetUserProfile(username);
  const userProfile = useUserProfileStore((state) => state.userProfile);

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!userProfile || Object.keys(userProfile).length === 0) {
    return (
      <Flex flexDir={"column"} alignItems={"center"} mx={"auto"}>
        <Text fontSize={"2xl"}>User Not Found</Text>
        <Link to={"/"}>Go Home</Link>
      </Flex>
    );
  }

  return (
    <Container maxW="container.lg" py={2}>
      <Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} direction={"column"}>
        <ProfileHeader userProfile={userProfile} />
      </Flex>
      <Flex px={{ base: 2, sm: 4 }} borderTop={"1px solid "} color={"whiteAlpha.300"} w={"full"} direction={"column"}>
        <ProfileTabs userProfile={userProfile} />
        <ProfilePost userProfile={userProfile} />
      </Flex>
      <ToastContainer />
    </Container>
  );
};

export default ProfilePage;
