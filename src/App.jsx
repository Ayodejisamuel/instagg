 import { ChakraProvider, Box } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/Homepage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PageLayout from "./Layout/PageLayout/PageLayout";
import useAuthStore from "./store/authStore";
import "./App.css";

function App() {
  const authUser = useAuthStore((state) => state.user);

  return (
    <ChakraProvider>
      <Router basename="/instagg">
        <PageLayout>
          <Box>
            <Routes>
              {/* Conditionally render the HomePage based on authentication */}
              <Route
                path="/"
                element={authUser ? <HomePage /> : <Navigate to="/auth" />}
              />
              
              {/* Public route for authentication */}
              <Route
                path="/auth"
                element={authUser ? <Navigate to="/" /> : <AuthPage />}
              />
              
              {/* Protected profile route */}
              <Route
                path="/:userprofile"
                element={authUser ? <ProfilePage /> : <Navigate to="/auth" />}
              />
            </Routes>
          </Box>
        </PageLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
