import { Flex, Avatar, Text, Button,} from "@chakra-ui/react";
import useSignout from "../../hooks/useSignOut";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
const SuggestedHeader = () => {
  const { handleLogout } = useSignout();
  const authUser = useAuthStore((state) => state.user);
  if(!authUser) return null
  return (
    <Flex
      justifyContent={"space-between"}
      w={"full"}
      py={2}
      alignItems={"center"}
    >
      <Flex gap={4} alignItems={"center"}>
        <Link to={authUser.userName}>
          <Avatar
            name="Deji"
            size="sm"
            src={authUser.profilePicUrl}
            alt={"profilePic"}
          />
        </Link>
        <Link to={authUser.userName}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.userName}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"sm"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        onClick={handleLogout}
        cursor={"pointer"}
        transition={"0.2s ease-in-out"}
      >
        Log out
      </Button>
    </Flex>
  );
};
export default SuggestedHeader;
