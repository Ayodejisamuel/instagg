import { Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ProfileData = ({ img }) => {
  return (
    <GridItem
      cursor="pointer"
      borderRadius="md"
      position="relative"
      aspectRatio="1"
      border="1px solid"
      borderColor="whiteAlpha.300"
      overflow="hidden"
    >
      {/* Hover Overlay */}
      <Flex
        opacity={0}
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        left={0}
        bg="whiteAlpha.800"
        transition="opacity 0.3s ease"
        zIndex={1}
        justifyContent="center"
        alignItems="center"
        _hover={{ opacity: 1 }}
      >
        {/* Icons and Text */}
        <Flex gap={8} alignItems="center" justifyContent="space-evenly">
          <Flex alignItems="center">
            <AiFillHeart size={24} />
            <Text fontWeight="bold" ml={2}>
              7
            </Text>
          </Flex>
          <Flex alignItems="center">
            <FaComment size={24} />
            <Text fontWeight="bold" ml={2}>
              7
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Image Content */}
      <Image
        src={img}
        w="100%"
        h="100%"
        objectFit="cover"
        alt="Profile data"
        loading="lazy"
      />
    </GridItem>
  );
};

export default ProfileData;
