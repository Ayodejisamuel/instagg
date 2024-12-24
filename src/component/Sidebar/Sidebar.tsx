import React from "react";
import { Box, Flex, Icon, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import { Tooltip } from "@chakra-ui/react";

const Sidebar = () => {

    const sidebarItems = [

        {
            Icon: 'Home',
            text: 'Home',
            link: '/'
            
        
        },

        {
            Icon: 'Home',
            text: 'Search',
        
            
        
        },
        {
            Icon: 'NotificationsLogo',
            text: 'Notifications',
            link: '/'
            
        
        },
        {
            Icon: 'CretePost',
            text: "Create",
            link: '/'
            
        
        },
        {
            Icon: 'ProfilePicture',
            text: 'Profile',
            link: '/'
            
        
        },
        {
            Icon: 'Home',
            text: 'Home',
            link: '/'
            
        
        },
    ]


  return (
    <Box
      height="100vh"
      borderRight="1px solid"
      borderColor="whiteAlpha.300"
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction="column" gap={10} w="full" height="full">
        {/* Desktop Logo */}
        <Link
          to={'/'}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
          _hover={{ bg: "whiteAlpha.200", borderRadius: "md", padding: 2 }}
        > 
          <InstagramLogo />
        </Link>

        {/* Mobile Logo */}
        <Link
          to={'/'}
          p={2}
          display ={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={'column'}gap={5} cursor={'pointer'}>

        {sidebarItems.map((item,index) => (
            <Tooltip
            key={index}
            label={item.text}
            placement='right'
            openDelay={500}
            display={{base:'block', md:'none'}}
            >


            </Tooltip>
        ))}

        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
