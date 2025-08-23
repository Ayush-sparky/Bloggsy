import RegisterForm from "./components/auth/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginPage";
import AuthProvider from "./context/authContext";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./context/ProtectedRoute";
import { ToastProvider } from "./context/ToastContext";
import ProfilePage from "./components/user/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
