
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

const EditProfile = ({ isOpen, onClose }) => {
	const {handleImageChange, selectedFile, setSelectedFile} = usePreviewImg()
	const fileRef = useRef(null)
	const [inputs, setInputs ] = useState({
		userName : '',
		fullName: '',
		bio : ''
	})
	const authUser = useAuthStore(state => state.user)
	console.log(selectedFile)
	const handleSubmitProfile = () => {
		console.log(inputs)
	}
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"black"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						{/* Container Flex */}
						<Flex bg={"black"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar size='xl' src={selectedFile || authUser.profilePicURL} border={"2px solid white "} />
										</Center>
										<Center w='full'>
											<Button onClick={() => fileRef.current.click()} w='full'>Edit Profile Picture</Button>
										</Center>
										<Input hidden type="file" ref={fileRef} onChange={handleImageChange}/>
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input placeholder={"Full Name"} size={"sm"} type={"text"}  value={inputs.fullName || authUser.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
								</FormControl>
								<FormControl>
									<FormLabel fontSize={"sm"}>Username</FormLabel>
									<Input placeholder={"Username"} size={"sm"} type={"text"} value={inputs.userName || authUser.userName} onChange={(e) => setInputs({...inputs, userName: e.target.value})}/>
								</FormControl>
								<FormControl>
									<FormLabel fontSize={"sm"}>Bio</FormLabel>
									<Input placeholder={"Bio"} size={"sm"} type={"text"} value={inputs.bio || authUser.bio} onChange={ (e) => setInputs({...inputs, bio: e.target.value})}/>
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"red.400"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }}
										onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"blue.400"}
										color={"white"}
										size='sm'
										w='full'
										_hover={{ bg: "blue.500" }}
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
		</>
	);
};

export default EditProfile;