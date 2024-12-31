import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <Flex>
        {!pathname.toLowerCase().includes("/auth") ? (
          <Box width={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>
        ) : null}

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
