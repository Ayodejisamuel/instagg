import React from "react";
import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import { BiLogOut } from "react-icons/bi";
import useAuthStore from "../../store/authStore";
import useSignOut from "../../hooks/useSignOut";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useSignOut();

  console.log(useAuthStore.getState());

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
    <Flex direction="column" justifyContent="space-between" w="full" height="full">
  <Flex direction="column" gap={10}>
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
      <SidebarItems />
    </Flex>
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
