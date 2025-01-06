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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
  // const authUser = useAuthStore((state) => state.user);
  const [authUser] = useAuthState(auth)

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
                element={ <ProfilePage />}
              />
            </Routes>
          </Box>
        </PageLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
