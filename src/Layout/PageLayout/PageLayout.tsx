import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../component/Navbar/Navbar";

const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  const [user, loading] = useAuthState(auth);
  const isProfilePage =  /^\/[^/]+$/.test(pathname);


 const canRenderSidebar = pathname !== '/auth' && user ;
 const canRenderNavbar = isProfilePage && !user &&  !loading && pathname !== '/auth'

  return (
    <div>
      <Flex flexDir={canRenderNavbar ? 'column' : 'row'}>
      {canRenderSidebar ? (<Box width={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>) : null} 
      
      {/* Navbar */}
      {canRenderNavbar ? ( <Navbar />) : null}

        <Box
          flex={1}
          width={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" } } mx={'auto'}
        >
          {children}
        </Box>
      </Flex>
    </div>
  );
};


export default PageLayout;
