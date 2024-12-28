import { Flex, AvatarGroup, Avatar,  } from "@chakra-ui/react";

const ProfileHeader = () => {

    return (

         <Flex direction={{base: 'column', md:'row'}} gap={{base:4, sm: 10}} py={10}>
    <AvatarGroup size={{base: 'xl', md: '2xl'}} >
<Avatar name='determinant_'  src='https://res.cloudinary.com/dfkiftgfj/image/upload/v1735358631/profilepic_sbwsbl.jpg'  />
    </AvatarGroup>

     </Flex>
     )
}

export default ProfileHeader;