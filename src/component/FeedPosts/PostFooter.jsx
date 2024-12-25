import { Flex, Box, Text } from "@chakra-ui/react";
import { NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import { useState } from "react";

const PostFooter = () => {
    const [count, setCount] = useState(1000)
    
    const handleCount = () => {
setCount(count - 1 )

    }


  return (
    <>
      <Flex direction={"column"}>
        <Box onClick={handleCount}>
        <Flex>
          <NotificationsLogo />
          <UnlikeLogo />
        </Flex>
        </Box>
        
        <Text>{count} likes</Text>
        <Flex alignItems={"center"} justifyContent={"left"} gap={2}>
          <Text fontSize={12} fontWeight={"bold"}>
            ayodeji
          </Text>{" "}
          <Text>feeling good</Text>
        </Flex>

        <Text>View all 1000 paticipants</Text>
      </Flex>
    </>
  );
};

export default PostFooter;
