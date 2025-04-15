import React from "react";
import { Tooltip, Box, Text, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProfileAvatar = () => {
  const authUserr = useAuthStore((state) => state.user);
  const path = authUserr.userName || "default";

  return (
    <div>
      <Tooltip
        label={"Notifications"}
        placement="right"
        openDelay={500}
        hasArrow
        ml={1}
        display={{ base: "block", md: "none" }}
      >
        <Box
          as={Link}
          to={authUserr.userName}
          display="flex"
          justifyContent={{ base: "center", md: "left" }}
          alignItems="center"
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
        >
          <Link to={authUserr.userName}>
            <Avatar
              name={authUserr.userName}
              size="sm"
              src={authUserr.profilePicUrl}
              alt={"profilePic"}
            />
          </Link>
          <Text display={{ base: "none", md: "block" }} fontSize="sm">
            Profile
          </Text>
        </Box>
      </Tooltip>
    </div>
  );
};

export default ProfileAvatar;
