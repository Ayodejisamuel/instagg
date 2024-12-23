import { ChakraProvider, Box, Button, HStack } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/HomePage';
import AuthPage from './Pages/AuthPage/AuthPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          {/* <HStack spacing={4}>
            <Button colorScheme="teal">Home</Button>
            <Button colorScheme="teal">Auth</Button>
          </HStack> */}

          {/* Define routes */}
          <Routes basename='/instagg'>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
