import { VStack, Flex, Box, Link } from "@chakra-ui/react";
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

      <SuggestedUserData
        name="ishola_faith10"
        avatar="https://bit.ly/dan-abramov"
        followers={1239}
      />
      <SuggestedUserData
        name="Ryan Florence"
        followers={4004}
        avatar="/instagg/img3.png"
      />
      <SuggestedUserData
        name="Christan Nwamba "
        followers={1034}
        avatar="/instagg/img2.png"
      />
      <Box  alignSelf={'start'} fontSize={12 } >
copyright: Copyright 2024 
<Link mx={3} target=' _blank' color={'blue.500'} to="https://ayodejisamuel.github.io/instagg/"  _hover={{textDecoration:'none'}}>AyodejiSamuel</Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
