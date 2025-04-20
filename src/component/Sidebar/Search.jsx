import React, { useRef } from "react";
import {
  Tooltip,
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import SearchUser from "../../hooks/useSearchUser";
import SuggestedUsers from '../SuggestedUser/SuggestedUsers'

const Search = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user, getUserProfile, loading } = SearchUser();
  const searchRef = useRef(null);

  const handleSearchUser = (e) => {
    e.preventDefault();
    if (searchRef.current && searchRef.current.value.trim()) {
      getUserProfile(searchRef.current.value.trim());
    }
  };
  console.log(user);

  return (
    <div>
      <Tooltip
        label={"Search"}
        placement="right"
        openDelay={500}
        hasArrow
        ml={1}
        display={{ base: "block", md: "none" }}
      >
        <Box
          as="button"
          onClick={onOpen}
          display="flex"
          justifyContent={{ base: "center", md: "left" }}
          alignItems="center"
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
        >
          <SearchLogo />
          <Text display={{ base: "none", md: "block" }} fontSize="sm">
            Search
          </Text>
        </Box>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bg="black" border="1px solid gray" maxW="400px">
          <ModalHeader>Search User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="Enter username" ref={searchRef} />
              </FormControl>
              <Flex w="full" justifyContent="flex-end">
                <Button
                  type="submit"
                  ml="auto"
                  size="sm"
                  my={4}
                  isLoading={loading}
                  colorScheme="blue"
                >
                  Search
                </Button>
              </Flex>
            </form>
            {user && <SuggestedUsers user={user} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Search;
