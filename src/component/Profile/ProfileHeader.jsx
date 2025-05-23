import {
  Flex,
  AvatarGroup,
  Avatar,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import { useDisclosure } from "@chakra-ui/react";
import useFollowUsers from "../../hooks/useFollowUsers";

const ProfileHeader = ({ userProfile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    userName,
    posts = [],
    followers = [],
    following = [],
    fullName,
    bio,
    profilePicURL,
  } = userProfile;
  const authUser = useAuthStore((state) => state.user);

  const { isUpdating, isFollowing, handleFollowers } = useFollowUsers(userProfile?.uid)

  const visitOwnerProfile =
    authUser && authUser.userName === userProfile.userName;
  const visitUsersProfile =
    authUser && authUser.userName !== userProfile.userName;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: 4, sm: 10 }}
      py={10}
      mx={{ base: 'auto', md: '1px' }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf="center"
        mx="auto"
        alignItems="center"
      >
        
        <Avatar
          name={userName}
          src={profilePicURL || "default-avatar-url.jpg"}
        />
      </AvatarGroup>
      <VStack align="start" gap={2} w="full" mx="auto" flex={1}>

        {visitOwnerProfile && (

          <Flex
            align="center"
            justify={{ base: "center", md: "center" }}
            gap={4}
          >
            <Text fontSize={{ base: "sm", md: "lg" }}  fontWeight='bold' color="whiteAlpha.900">
              {userName}
            </Text>
            <Button
              bg="white"
              color="black"
              size={{ base: "xs", md: "sm" }}
              _hover={{ bg: "whiteAlpha.800" }}
              onClick={onOpen}
            >
              Edit Profile
            </Button>
          </Flex>
        )}
        {visitUsersProfile && (
          <Flex
            align="center"
            justify={{ base: "center", md: "center" }}
            gap={4}
          >
            <Text fontSize={{ base: "sm", md: "lg" }} color="whiteAlpha.900">
              {userName}
            </Text>
            <Button
              bg="white"
              color="black"
              size={{ base: "xs", md: "sm" }}
              _hover={{ bg: "blue.600" }}
              onClick ={ ()=> {
                console.log('andle cliked')
                handleFollowers()
              }}
              isLoading={isUpdating} >
              {isFollowing? 'Unfollow': 'Follow'}
            </Button>
          </Flex>
        )}
        <Flex
          align="center"
          justify={{ base: "center", md: "center" }}
          gap={{ base: 2, sm: 4 }}
          fontSize={{ base: "xs", md: "sm" }}
        >
          <Text>
            <Text as="span" fontWeight="bold" mr={1}>
              {posts.length}
            </Text>
            Posts
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" mr={1}> 
              {followers?.length || 0}
            </Text>
            Followers
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" mr={1}> 
              {following.length || 0}
            </Text>
            Following
          </Text>
        </Flex>
        
        <Flex justify={{ base: "center", md: "center" }}>
          <Text fontSize="sm" color="gray.500">
            {fullName}
          </Text>
        </Flex>
        <Flex justify={{ base: "center", md: "center" }} fontSize="sm">
          {bio || "This user has no bio yet."}
        </Flex>
      </VStack>
      {isOpen && <EditProfile  isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  );
};

export default ProfileHeader;
