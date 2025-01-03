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
              {/* Home route: if not authenticated, redirect to /auth */}
              <Route
  path="/"
  element={<HomePage /> }
/>
<Route
  path="/auth"
  element={<AuthPage /> }
/>

              {/* User profile route */}
              <Route path="/:userprofile" element={<ProfilePage />} />
            </Routes>
          </Box>
        </PageLayout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
