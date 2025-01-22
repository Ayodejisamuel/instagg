import React from "react";
import { Box, Flex, Avatar, Text, Tooltip } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  CreatePostLogo,
  SearchLogo,
  NotificationsLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useAuthStore from "../../store/authStore";
import useSignOut from "../../hooks/useSignOut";

const Sidebar = () => {
  const authUserr = useAuthStore((state) => state.user); 
  const navigate = useNavigate();
  const { handleLogout } = useSignOut();
console.log(authUserr)
  const path = authUserr?.userName || "default"; 

  const sidebarItems = [
    {
      Icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      Icon: <SearchLogo />,
      text: "Search",
      link: "/search",
    },
    {
      Icon: <NotificationsLogo />,
      text: "Notifications",
      link: "/notifications",
    },
    {
      Icon: <CreatePostLogo />,
      text: "Create",
      link: "/create",
    },
    {
      Icon: (
        <Avatar
          size="sm"
          name={authUserr?.userName || "User"} // Fallback to "User" if userName is unavailable
          src={authUserr?.userName || "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/profilepic_sbwsbl.jpg"} // Use default image if profilePic is unavailable
        />
      ),
      text: "Profile",
      link: `/${path}`, // Dynamic link with fallback
    },
  ];

  return (
    <Box
      height="100vh"
      borderRight="1px solid"
      borderColor="whiteAlpha.300"
      py={8}
      position="sticky"
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction="column" gap={10} w="full" height="full">
        {/* Desktop Logo */}
        <Box
          as={Link}
          to="/"
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
          _hover={{ bg: "whiteAlpha.200", borderRadius: "md", padding: 2 }}
        >
          <InstagramLogo />
        </Box>

        {/* Mobile Logo */}
        <Box
          as={Link}
          to="/"
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
          m={"1px auto"}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Box>

        {/* Sidebar Items */}
        <Flex direction="column" gap={5}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              label={item.text}
              placement="right"
              openDelay={500}
              hasArrow
              display={{ base: "block", md: "none" }}
            >
              <Box
                as={Link}
                to={item.link || "#"}
                display="flex"
                justifyContent={{ base: "center", md: "left" }}
                alignItems="center"
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}                borderRadius={6}
                p={2}
              >
                {item.Icon}
                <Text display={{ base: "none", md: "block" }} fontSize="sm">
                  {item.text}
                </Text>
              </Box>
            </Tooltip>
          ))}
        </Flex>

        {/* Logout */}
        <Tooltip
          label="Logout"
          placement="right"
          openDelay={500}
          hasArrow
          display={{ base: "block", md: "none" }}
        >
          <Box
            as="button"
            onClick={async () => {
              const success = await handleLogout();
              if (success) {
                navigate("/auth");
              }
            }}
            display="flex"
            justifyContent={{ base: "center", md: "left" }}
            alignItems="center"
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
