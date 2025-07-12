import React from "react";
import { Tooltip, Box, Text, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import Navbar  from "../Navbar/Navbar";

const ProfileAvatar = () => {
  const authUserr = useAuthStore((state) => state.user);

  if (!authUserr) return null;
  const path = authUserr.userName || "default";
  // const authUser = userAuthStore((state) => state.user)

  return (
    <Tooltip label="Profile" placement="right" openDelay={500} hasArrow>
      <Box
        as={Link}
        to={path}
        display="flex"
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        ml={1}
      >
        <Avatar
          name={authUserr.userName}
          size="sm"
          src={authUserr.profilePicUrl}
          alt="profilePic"
          
        />
        <Text display={{ base: "none", md: "block" }} fontSize="sm">
          Profile
        </Text>
      </Box>
      <Navbar />
    </Tooltip>
  );
};

export default ProfileAvatar;
