import { VStack, Flex, Box, Link, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUserData from "./SuggestedUserData";
import { useEffect, useState } from "react";

const SuggestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading state with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // Mock user data array
  const suggestedUsers = [
    {
      name: "Jenifa_Lane",
      avatar:
        "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921481/samples/upscale-face-1.jpg",
      followers: 1239,
    },
    {
      name: "jerry_james",
      avatar:
        "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921471/samples/people/smiling-man.jpg",
      followers: 1239,
    },
    {
      name: "Ryan Florence",
      avatar:
        "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921480/samples/man-portrait.jpg",
      followers: 4004,
    },
    {
      name: "Christan Nwamba",
      avatar:
        "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921479/samples/smile.jpg",
      followers: 1034,
    },
  ];

  // Skeleton Loader
  const renderSkeletons = () =>
    [0,1,2,3].map((_, index) => (
      <VStack key={index} mb={6} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p={6}
          boxShadow="lg"
          w="full"
        >
          <Flex gap={4} alignItems="center" w="full">
            <SkeletonCircle size="10" />
            <Box py={3}>
              <Skeleton height="10px" width="100px" mb={2} />
              <Skeleton height="10px" width="100px" />
            </Box>
          </Flex>
          <Skeleton height="10px" width="50px" />
        </Flex>
      </VStack>
    ));

  return isLoading ? (
    renderSkeletons()
  ) : (
    <VStack py={2} gap={4} px={6}>
      <SuggestedHeader
        avatar="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/profilepic_sbwsbl.jpg"
        name="determinant"
      />
      <Flex
        py={4}
        justifyContent="space-between"
        alignItems="center"
        w="full"
      >
        <Box fontSize="sm" fontWeight={400} color="gray">
          Suggested for you
        </Box>
        <Link
          color="whiteAlpha"
          _hover={{ textDecoration: "none", color: "blue.500" }}
          cursor="pointer"
          fontSize="sm"
        >
          See All
        </Link>
      </Flex>

      {/* Render Suggested Users */}
      {suggestedUsers.map((user, index) => (
        <SuggestedUserData
          key={index}
          name={user.name}
          avatar={user.avatar}
          followers={user.followers}
        />
      ))}

      <Box alignSelf="start" fontSize={12}>
        copyright: Copyright 2024
        <Link
          mx={3}
          target="_blank"
          color="blue.500"
          href="https://ayodejisamuel.github.io/instagg/"
          _hover={{ textDecoration: "none", color: "white" }}
        >
          AyodejiSamuel
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
