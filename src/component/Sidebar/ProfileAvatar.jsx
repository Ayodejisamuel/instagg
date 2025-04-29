import React from "react";
import { Tooltip, Box, Text, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProfileAvatar = () => {
  const authUser = useAuthStore((state) => state.user);
  const path = authUser.userName || "default";
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
          name={authUser.userName}
          size="sm"
          src={authUser.profilePicUrl}
          alt="profilePic"
          
        />
        <Text display={{ base: "none", md: "block" }} fontSize="sm">
          Profile
        </Text>
      </Box>
    </Tooltip>
  );
};

export default ProfileAvatar;
