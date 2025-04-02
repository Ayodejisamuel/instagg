import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
  } from "@chakra-ui/react";
  
  import { useRef, useState } from "react";
  import useAuthStore from "../../store/authStore";
  import usePreviewImg from "../../hooks/usePreviewImg";
  import useEditProfile from "../../hooks/useEditProfile";
  import { toast } from "react-toastify";
  
  const EditProfile = ({ isOpen, onClose }) => {
	
	const toastOptions = {
		position: "bottom-right",
		autoClose: 8000,
		pauseOnHover: true,
		draggable: true,
		theme: "dark",
		style: {
		  backgroundColor: "#2b3548",
		  color: "#fff",
		  fontSize: "16px",
		  borderRadius: "10px",
		},
	  };
	const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
	const { isUpdating, editProfile } = useEditProfile();
	const fileRef = useRef(null);
	const authUser = useAuthStore((state) => state.user);
	// console.log(selectedFile)
  
	const [inputs, setInputs] = useState({
	  userName: authUser?.userName || "",
	  fullName: authUser?.fullName || "",
	  bio: authUser?.bio || "",
	});
  
	const handleSubmitProfile = async () => {
		// console.log("Submit button clicked"); 
	  try {
		await editProfile(inputs, selectedFile);
		setSelectedFile(null);

		onClose();
	  } catch (error) {
		toast.error("Error while editing profile:", error);
	  }
	};
  
	return (
	  <Modal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent bg="black" boxShadow="xl" border="1px solid gray" mx={3}>
		  <ModalHeader>Edit Profile</ModalHeader>
		  <ModalCloseButton />
		  <ModalBody>
			<Flex>
			  <Stack spacing={4} w="full" maxW="md" p={6}>
				<Heading fontSize="2xl">Edit Profile</Heading>
				<FormControl>
				  <Stack direction={["column", "row"]} spacing={6}>
					<Center>
					  <Avatar size="xl" src={selectedFile || authUser?.profilePicURL} />
					</Center>
					<Center w="full">
					  <Button onClick={() => fileRef.current.click()} w="full">
						Edit Profile Picture
					  </Button>
					</Center>
					<Input hidden type="file" ref={fileRef} onChange={handleImageChange} />
				  </Stack>
				</FormControl>
				<FormControl>
				  <FormLabel>Full Name</FormLabel>
				  <Input
					placeholder="Full Name"
					value={inputs.fullName}
					onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
				  />
				</FormControl>
				<FormControl>
				  <FormLabel>Username</FormLabel>
				  <Input
					placeholder="Username"
					value={inputs.userName}
					onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
				  />
				</FormControl>
				<FormControl>
				  <FormLabel>Bio</FormLabel>
				  <Input
					placeholder="Bio"
					value={inputs.bio}
					onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
				  />
				</FormControl>
				<Stack direction="row" spacing={6}>
				  <Button bg="red.400" color="white" onClick={onClose}>
					Cancel
				  </Button>
				  <Button
					bg="blue.400"
					color="white"
					isLoading={isUpdating}
					onClick={handleSubmitProfile}
				  >
					Submit
				  </Button>
				</Stack>
			  </Stack>
			</Flex>
		  </ModalBody>
		</ModalContent>
	  </Modal>
	);
  };
  
  export default EditProfile;
  