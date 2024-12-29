import { Avatar, Flex, Text } from "@chakra-ui/react";

const Comment = ({ createdAt, username, profilepic, text }) => {
  return (
    <Flex gap={4} >
      
      <Avatar src={profilepic} name={username} size={"sm"} />
      <Flex flexDir={'column'}>
        <Flex gap={2}>
<Text fontWeight={'bold'} fontSize={11}>{username}</Text>
<Text  fontSize={11}>{text}</Text>
        </Flex>
        <Text color={'gray'} fontWeight={'bold'} fontSize={11}>{createdAt}</Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
