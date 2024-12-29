import { Flex, GridItem, Image, useDisclosure } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
const ProfileData = ({ img }) => {
  return (
    <>
      <GridItem
        onClick={() => console.log("click works")}
        cursor="pointer"
        borderRadius="md"
        position="relative"
        border="1px solid"
        borderColor="whiteAlpha.300"
        overflow="hidden"
      >
        <Image
          src={img}
          alt="Profile data"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </GridItem>
    </>
  );
};

export default ProfileData;

// export default ProfileData;
