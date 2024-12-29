import { Grid, Skeleton, VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfileData from "./ProfileData";

const ProfilePost = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Array of image URLs
  const imageUrls = [
    'https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921480/samples/man-portrait.jpg',
    "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358633/img4_t1spsf.jpg",
    'https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921481/samples/upscale-face-1.jpg',
    "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img3_j6if3q.jpg",
    " https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img2_jtbspt.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return isLoading ? (
    [0, 1, 2, 3].map((_, index) => (
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
        <ProfileData key={index} img={img} />
      ))}
    </Grid>
  );
};

export default ProfilePost;
