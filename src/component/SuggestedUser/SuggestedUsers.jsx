import { VStack, Flex, Box, } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUserData from "./SuggestedUserData";

const SuggestedUsers = () => {
  return (
    <VStack py={2} gap={4} px={6}>
      <SuggestedHeader />
      <Flex
        py={4}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"full"}
      >
        <Box fontSize={"sm"} fontWeight={400} color={"gray"}>
          Suggested for you
        </Box>
        <Box fontSize={"sm"}>See All</Box>
      </Flex>

 <SuggestedUserData name='ishola_faith10' avatar='https://bit.ly/dan-abramov' followers={1239}/>
 <SuggestedUserData name='Ryan Florence' followers={4004} avatar='/instagg/img1.png' />
 <SuggestedUserData name='Christan Nwamba ' followers={1034} avatar='https://bit.ly/dan-abramov'/>
 {/* <SuggestedUserData /> */}
 
      
    </VStack>
  );
};

export default SuggestedUsers;
