import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PageLayout from "./Layout/PageLayout/PageLayout";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
 
      <Router basename="/instagg">
      <PageLayout>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/:userprofile" element={<ProfilePage />} />
          </Routes>
        </Box>
        </PageLayout>
      </Router>
  
 
    </ChakraProvider>
  );
}

export default App;
