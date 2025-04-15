import React from "react";
import { Tooltip, Box, Text } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";
import { Link } from "react-router-dom";

const Notification = () => {
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
          to={"/nofications"}
          display="flex"
          justifyContent={{ base: "center", md: "left" }}
          alignItems="center"
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
        >
          <NotificationsLogo />
          <Text display={{ base: "none", md: "block" }} fontSize="sm">
            Notification
          </Text>
        </Box>
      </Tooltip>
    </div>
  );
};

export default Notification;
