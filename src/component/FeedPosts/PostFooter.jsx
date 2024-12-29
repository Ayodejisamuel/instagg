import { Flex, Box, Text, InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import { useState } from "react";
import { span } from "framer-motion/client";

const PostFooter = ({username, isProfilePage}) => {
  const [isLike, setIsLike] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (isLike) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLike(!isLike);
  };

  return (
    <Flex direction={"column"}  >
      <Flex fontSize={18}>
        <Flex cursor={"pointer"} gap={3} my={4}  onClick={handleLike}>
          {!isLike ? <NotificationsLogo /> : <UnlikeLogo />}
          <Flex><CommentLogo /></Flex>
        </Flex>
      </Flex>

      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
    
  {!isProfilePage && <>
    <Flex
        alignItems={"center"}
        fontSize={"sm"}
        my={1}
        justifyContent={"left"}
        gap={2}
      >
    <Text fontSize={"sm"} fontWeight={700}>
        {username}
        </Text><Text as={span} fontWeight={400}>Feeling good</Text>
      </Flex>

      <Text fontSize={"sm"} fontWeight={400} color={"gray"}>
        View all {likes} likes
      </Text></>}

      <Box>
        <InputGroup >
        <Input variant={'flushed'} fontSize={14} placeholder="Add a comment..." size="sm" />
      <InputRightElement>
    <Button color={'blue.500'} fontSize={14} fontWeight={600} _hover={{color: 'white'}}  bg={'transparent'}>Post</Button>
    </InputRightElement>
  </InputGroup>
      </Box>
    </Flex>
  );
};

export default PostFooter;
