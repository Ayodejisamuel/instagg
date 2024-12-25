import PostHeader from "./PostHeader";
import PostFooter from './PostFooter';
import { Avatar, Image } from '@chakra-ui/react';

const FeedPosts = ({avatar, username, img}) => {
    return (
        <>
            <PostHeader  avatar={avatar}  username={username}/>
            <Image w={'full'} borderRadius={4} overflow={'hidden'} src={img} />
            <PostFooter username={username}/>
        </>

    );
}

export default FeedPosts;
