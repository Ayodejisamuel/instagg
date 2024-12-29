// import {
//   Grid,
//   Skeleton,
//   VStack,
//   Box,
//   Flex,
//   Text,
//   Image,
//   Avatar,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   Divider,
//   ModalBody,
//   useDisclosure,
//   Comment,
// } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { AiFillHeart } from "react-icons/ai";
// import { FaComment } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

// const ProfilePost = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Array of image URLs
//   const imageUrls = [
//     "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921480/samples/man-portrait.jpg",
//     "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358633/img4_t1spsf.jpg",
//     "https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921481/samples/upscale-face-1.jpg",
//     "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img3_j6if3q.jpg",
//     "https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img2_jtbspt.jpg",
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleImageClick = (img) => {
//     setSelectedImage(img);
//     onOpen();
//   };

//   return (
//     <>
//       {isLoading ? (
//         [0, 1, 2, 3, 4].map((_, index) => (
//           <VStack key={index} w="100%">
//             <Skeleton height="300px" width="100%" borderRadius="md">
//               <Box h="300px" />
//             </Skeleton>
//           </VStack>
//         ))
//       ) : (
//         <Grid
//           templateColumns={{
//             base: "repeat(1, 1fr)",
//             md: "repeat(2, 1fr)",
//             lg: "repeat(3, 1fr)",
//           }}
//           gap={4}
//         >
//           {imageUrls.map((img, index) => (
//             <Box
//               key={index}
//               position="relative"
//               overflow="hidden"
//               borderRadius="md"
//               cursor="pointer"
//               onClick={() => handleImageClick(img)}
//             >
//               {/* Image */}
//               <Image
//                 src={img}
//                 alt={`Profile ${index}`}
//                 objectFit="cover"
//                 w="100%"
//                 h="300px"
//               />

//               {/* Overlay with Heart and Comment Count */}
//               <Flex
//                 position="absolute"
//                 top="0"
//                 left="0"
//                 w="100%"
//                 h="100%"
//                 justifyContent="center"
//                 alignItems="center"
//                 bg="rgba(0, 0, 0, 0.5)"
//                 opacity="0"
//                 transition="opacity 0.3s ease"
//                 _hover={{ opacity: "1" }}
//                 color="white"
//               >
//                 <Flex alignItems="center" gap={6}>
//                   <Flex alignItems="center">
//                     <AiFillHeart size={24} />
//                     <Text ml={2} fontWeight="bold">
//                       7
//                     </Text>
//                   </Flex>
//                   <Flex alignItems="center">
//                     <FaComment size={24} />
//                     <Text ml={2} fontWeight="bold">
//                       7
//                     </Text>
//                   </Flex>
//                 </Flex>
//               </Flex>
//             </Box>
//           ))}
//         </Grid>
//       )}

//       <Modal
//         isOpen={isOpen}
//         onClose={onClose}
//         isCentered
//         size={{ base: "sm", md: "2xl" }}

//       >
//         <ModalOverlay />
//         <ModalContent>
//           {/* <ModalCloseButton /> */}
//           <ModalBody bg={"#1a202c"} p={10}>
//             <Flex
//               gap={4}
//               w={{ base: "90%", sm: "70%", md: "full" }}
//               mx={"auto"}
//             >
//               <Box
//                 borderRadius={4}
//                 borderColor={"whiteAlpha.300"}
//                 border={"1px solid "}
//                 flex={1.5}
//               >
//                 {selectedImage && (
//                   <Image
//                     src={selectedImage}
//                     alt="Selected Profile"
//                     width="100%"
//                     height="100%"
//                     objectFit="cover"
//                   />
//                 )}
//               </Box>
//               <Flex
//                 flex={1}
//                 w={"full"}
//                 flexDir={"column"}
//                 px={5}
//                 display={{ base: "none", md: "flex" }}
//               >
//                 <Flex alignItems={"center"} justifyContent={"space-between"}>
//                   <Avatar
//                     src="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/profilepic_sbwsbl.jpg"
//                     alt="profile-img"
//                     size={"sm"}
//                     name="_determinant"
//                   />
//                   <Text fontWeight={"bold"} fontSize={12}>
//                     _determinant
//                   </Text>
//                   <Box
//                     _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
//                     borderRadius={4}
//                     p={1}
//                   >
//                     <MdDelete size={20} cursor="pointer" />
//                   </Box>
//                 </Flex>
//                 <Divider my={4} bg={"gray.500"} />
//                 {/* <VStack
//                   w={"full"}
//                   alignItems={"start"}
//                   maxH={"350px"}
//                   overflowY={"auto"}
//                 >
//                   {imageUrls.map((img, index) => (
//                     <Box       key={index}>
//                       <Comment

//                      createdAt="1day ago"
//                      username="_determinant"
//                      profilePic={img}
//                      text="Dummy images"
//                    />
//                     </Box>

//                   ))}

//                 </VStack> */}
//               </Flex>
//             </Flex>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default ProfilePost;
import {
  Grid,
  Skeleton,
  VStack,
  Box,
  Flex,
  Text,
  Image,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../comment/comment";
import PostFooter from "../FeedPosts/PostFooter";
const ProfilePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (img) => {
    setSelectedImage(img);
    onOpen();
  };

  return (
    <>
      {isLoading ? (
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
              cursor="pointer"
              onClick={() => handleImageClick(img)}
            >
              {/* Image */}
              <Image
                src={img}
                alt={`Profile ${index}`}
                objectFit="cover"
                w="100%"
                h="300px"
              />

              {/* Overlay with Heart and Comment Count */}
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
                  <Flex alignItems="center">
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
      )}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "sm", md: "2xl" }}
        height={"300px"}
        w={"80%"}
        mx={"auto"}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          <ModalBody bg={"#1a202c"} p={10}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                borderColor={"whiteAlpha.300"}
                border={"1px solid "}
                flex={1.5}
              >
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Selected Profile"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                )}
              </Box>
              <Flex
                flex={1}
                w={"full"}
                flexDir={"column"}
                px={5}
                display={{ base: "none", md: "flex" }}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w={"full"}
                >
                  <Flex alignItems={"center"} gap={2}>
                    <Avatar
                      src="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/profilepic_sbwsbl.jpg"
                      alt="profile-img"
                      size={"sm"}
                      name="_determinant"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      _determinant
                    </Text>
                  </Flex>

                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor="pointer" />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="30mins ago"
                    username="_determinant"
                    profilepic="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img2_jtbspt.jpg"
                    text="its looks cool man"
                  />

                  <Comment
                    createdAt="2mins ago"
                    username="_determinant"
                    profilepic="https://res.cloudinary.com/dfkiftgfj/image/upload/v1733921481/samples/upscale-face-1.jpg"
                    text="Nice picture"
                  />

                  <Comment
                    createdAt="1d ago"
                    username="_determinant"
                    profilepic="https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/img2_jtbspt.jpg"
                    text="good outfit"
                  />
                </VStack>
                <Divider my={4} bg={"gray.500"} />
                <PostFooter />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
