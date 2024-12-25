import { Flex, Box, Text } from "@chakra-ui/react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import { useState } from "react";

const PostFooter = () => {
  const [isLike, setIsLike] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike =() => {
    if(isLike ) {
       
        setLikes(likes - 1)

    }else {
   
        setLikes(likes + 1)
    }

    setIsLike(!isLike)
  }

  return (

      <Flex direction={"column"}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          
            <Flex gap={3} my={4}>
              {!isLike ? <NotificationsLogo /> : <UnlikeLogo />}
              <CommentLogo />
            </Flex>
        
        </Box>

        <Text fontWeight={600} fontSize={'sm'}>{likes} likes</Text>
        <Flex alignItems={"center"} fontSize={'sm'} my={1} justifyContent={"left"} gap={2}>
          <Text fontSize={'sm'} fontWeight={700}>
            determinant_
          </Text>
          <Text fontWeight={400} >feeling good</Text>
        </Flex>

        <Text fontSize={'sm'} fontWeight={400} color={'gray'}>View all 1000 paticipants</Text>
      </Flex>

  );
};

export default PostFooter;
