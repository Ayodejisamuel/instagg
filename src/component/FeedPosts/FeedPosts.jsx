import PostHeader from "./PostHeader";
import PostFooter from './PostFooter';
import { Avatar, Image } from '@chakra-ui/react';

const FeedPosts = () => {
    return (
        <>
            <PostHeader />
            <Image w={'full'} src='/instagg/profilepic.jpg' />
            <PostFooter />
        </>

    );
}

export default FeedPosts;
