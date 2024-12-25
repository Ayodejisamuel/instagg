import { Flex, Box, Text, InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import { useState } from "react";
import { span } from "framer-motion/client";

const PostFooter = ({username}) => {
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
    <Flex direction={"column"} mb={10}>
      <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
        <Flex gap={3} my={4}>
          {!isLike ? <NotificationsLogo /> : <UnlikeLogo />}
          <CommentLogo />
        </Flex>
      </Box>

      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
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
      </Text>

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
