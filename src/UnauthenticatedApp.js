import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default UnauthenticatedApp;
