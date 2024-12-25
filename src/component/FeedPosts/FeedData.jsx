import { useEffect, useState } from "react";
import FeedPosts from "./FeedPosts";
import {
  VStack,
  Flex,
  Container,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  Box,
} from "@chakra-ui/react";

const FeedData = () => {
  const [isLoading, setIsLoading] = useState(true);

  const posts = [
    {
      username: "johndoe",
      img: "/instagg/img4.png",
      avatar: "/instagg/img4.png",
    },
    {
      username: "determinant_",
      img: "/instagg/profilepic.jpg",
      avatar: "/instagg/profilepic.jpg",
    },
    {
      username: "ishola_faith10",
      img: "/instagg/img3.png",
      avatar: "/instagg/img3.png",
    },
    {
      username: "maverick_",
      img: "/instagg/img2.png",
      avatar: "/instagg/img2.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW="container.lg" py={4}>
      {isLoading
        ? [0, 1, 2, 3].map((_, index) => (
            <VStack key={index}   mb={6}>
              <Flex
                alignItems="center"
                justifyContent="space-around"
                gap={2}
                p={6}
                boxShadow="lg"
                w='full'
              >
                <Flex gap={2} alignItems='center'  width='full'>
                  {" "}
                  <SkeletonCircle size="10"  />
                  <Skeleton height="10px" width="100px" />
                </Flex>

                <Skeleton height="10px" width="50px" />
              </Flex>
              <Skeleton w="full">
                <Box h="300px">Contents wrapped</Box>
              </Skeleton>
            </VStack>
          ))
        : posts.map((post, index) => (
            <FeedPosts
              key={index}
              username={post.username}
              img={post.img}
              avatar={post.avatar}
            />
          ))}
    </Container>
  );
};

export default FeedData;
