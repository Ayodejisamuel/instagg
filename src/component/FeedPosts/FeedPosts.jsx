import PostHeader from "./PostHeader";
import PostFooter from './PostFooter';
import { Avatar, Image } from '@chakra-ui/react';

const FeedPosts = ({avatar, username, img, alt}) => {
    return (
        <>
            <PostHeader  avatar={avatar}  username={username}/>
            <Image w={'full'} borderRadius={4} alt={alt} overflow={'hidden'} src={img} />
            <PostFooter username={username}/>
        </>

    );
}

export default FeedPosts;
