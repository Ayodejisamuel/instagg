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
import "./App.css";
import useAuthStore from "./store/authStore";
 

function App() {
  const authUser = useAuthStore((state) => state.user);

  return (
    <ChakraProvider>
      <Router basename="/instagg">
        <PageLayout>
          <Box>
            <Routes>
              <Route
                path="/"
                element={
                  authUser ? <HomePage /> : <Navigate to="/auth" />
                }
              />
              <Route
                path="/auth"
                element={
                  !authUser ? <AuthPage /> : <Navigate to="/homepage" />
                }
              />
              <Route path="/:userprofile" element={<ProfilePage />} />
            </Routes>
          </Box>
        </PageLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
