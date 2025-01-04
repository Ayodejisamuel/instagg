import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  const [user] = useAuthState(auth);
 const canRenderSidebar = pathname !== '/auth' && user
  return (
    <div>
      <Flex>
      {canRenderSidebar ? (<Box width={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>) : null}
          
      

        <Box
          flex={1}
          width={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        >
          {children}
        </Box>
      </Flex>
    </div>
  );
};

export default PageLayout;
