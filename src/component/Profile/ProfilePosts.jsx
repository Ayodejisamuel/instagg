import {
    Grid,
    Skeleton,
    VStack,
    Box,
    Flex,
    Text,
    Image,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { AiFillHeart } from "react-icons/ai";
  import { FaComment } from "react-icons/fa";
  
  const ProfilePost = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    // Array of image URLs
    const imageUrls = [
      "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921480/samples/man-portrait.jpg",
      "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358633/img4_t1spsf.jpg",
      "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921481/samples/upscale-face-1.jpg",
      "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img3_j6if3q.jpg",
      "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img2_jtbspt.jpg",
    ];
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return isLoading ? (
      [0, 1, 2, 3, 4].map((_, index) => (
        <VStack key={index} w="100%">
          <Skeleton height="300px" width="100%" borderRadius="md">
            <Box h="300px" />
          </Skeleton>
        </VStack>
      ))
    ) : (
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {imageUrls.map((img, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            borderRadius="md"
                 cursor='pointer'
          >
            {/* Image */}
            <Image
              src={img}
              alt={`Profile ${index}`}
              objectFit="cover"
              w="100%"
              h="300px"
         
            />
  
                    {/*Overlay with Heart and Comment Count */}
            <Flex
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              justifyContent="center"
              alignItems="center"
              bg="rgba(0, 0, 0, 0.5)"
              opacity="0"
              transition="opacity 0.3s ease"
              _hover={{ opacity: "1" }}
              color="white"
            >
              <Flex alignItems="center" gap={6}>
                <Flex alignItems="center" onClick={() => alert('send message')}>
                  <AiFillHeart size={24} />
                  <Text ml={2} fontWeight="bold">
                    7
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <FaComment size={24} />
                  <Text ml={2} fontWeight="bold">
                    7
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Grid>
    );
  };
  
  export default ProfilePost;
  