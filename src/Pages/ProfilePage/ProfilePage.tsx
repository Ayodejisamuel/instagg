import React, { useEffect } from "react";
import { Flex, Container, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ProfileHeader from "../../component/Profile/ProfileHeader";
import ProfilePost from "../../component/Profile/ProfilePosts";
import ProfileTabs from "../../component/Profile/ProfileTabs";
import useGetUserProfile from "../../hooks/getUserProfile";
import useUserProfileStore from "../../store/userProfileStore";

const ProfilePage = () => {
  const { username } = useParams(); 
  const { isLoading, error } = useGetUserProfile(username); 
  const userProfile = useUserProfileStore((state) => state.userProfile);

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`, {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        style: {
          backgroundColor: "#2b3548",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "10px",
        },
      });
    }
  }, [error]);

  // Show loading state
  if (isLoading) {
    return (
      <Text fontSize="xl" textAlign="center" mt={10}>
        Loading...
      </Text>
    );
  }

  // Handle case where user profile is not found
  if (!userProfile || Object.keys(userProfile).length === 0) {
    return (
      <Flex flexDirection="column" alignItems="center" mt={10}>
        <Text fontSize="2xl" fontWeight="bold" color="red.500">
          User Not Found
        </Text>
        <Link to="/">
          <Text fontSize="lg" color="blue.500" mt={2}>
            Go Home
          </Text>
        </Link>
      </Flex>
    );
  }

  // Render user profile information
  return (
    <Container maxW="container.lg" py={4}>
      {/* Profile Header */}
      <Flex py={10} px={{ base: 4, md: 10 }} direction="column" align="center">
        <ProfileHeader userProfile={userProfile} />
      </Flex>

      {/* Profile Tabs and Posts */}
      <Flex
        px={{ base: 2, sm: 4 }}
        borderTop="1px solid"
        borderColor="whiteAlpha.300"
        direction="column"
        mt={4}
      >
        <ProfileTabs userProfile={userProfile} />
        <ProfilePost userProfile={userProfile} />
      </Flex>

      {/* Toast notifications */}
      <ToastContainer />
    </Container>
  );
};

export default ProfilePage;
