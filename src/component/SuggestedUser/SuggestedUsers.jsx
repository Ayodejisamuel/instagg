import { VStack, Flex, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUserData from "./SuggestedUserData";
import { useEffect, useState } from "react";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";


const SuggestedUsers = () => {

  const [isLoading, setIsLoading] =useState(true)


  useEffect( () => {
    setTimeout(() => {
setIsLoading(false)
    }, 2000);
  }, [])
  return (
    isLoading ? [0, 1 , 2 ].map( (_, index) => (
<VStack key={index}   mb={6}>
              <Flex
                alignItems="center"
                justifyContent="space-around"
                gap={2}
                p={6}
                boxShadow="lg"
                w='full'
              >
                <Flex gap={4} alignItems='center'  width='full'>
    
                  <SkeletonCircle gap={3} size="10"  />
                  <Box py={3}> 
                  <Skeleton height="10px" width="100px" mb={2} />
                  <Skeleton height="10px" width="100px" />
                  </Box>
                  
                </Flex>

                <Skeleton height="10px" width="50px" />
              </Flex>
           
              
         
            </VStack>
    ))  :
    <VStack py={2} gap={4} px={6}>
      <SuggestedHeader
        avatar="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/profilepic_sbwsbl.jpg"
        name="determinant"
      />
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
        avatar="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img3_j6if3q.jpg"
      />
      <SuggestedUserData
        name="Christan Nwamba "
        followers={1034}
        avatar="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img2_jtbspt.jpg"
      />
      <Box alignSelf={"start"} fontSize={12}>
        copyright: Copyright 2024
        <Link
          mx={3}
          target=" _blank"
          color={"blue.500"}
          to="https://ayodejisamuel.github.io/instagg/"
          _hover={{ textDecoration: "none" }}
        >
          AyodejiSamuel
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
