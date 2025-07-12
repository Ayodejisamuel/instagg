import { Container, Image, Flex, Link, Button } from "@chakra-ui/react";
import { InstagramLogo } from "../../assets/constants";
const Navbar = () => {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        w={"full"}
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        <Image
          src="/instagg/logo.png "
          h={20}
          display={{ base: "none", sm: "block" }}
          cursor={"pointer"}
        />
        <Flex gap={4}>
          <Link to="/auth">
            <Button colorScheme={"blue"} size={"sm"}>
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant={"outline"} size={"sm"}>
              Sign up
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar