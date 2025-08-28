import RegisterForm from "./components/auth/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginPage";
import AuthProvider from "./context/authContext";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./context/ProtectedRoute";
import { ToastProvider } from "./context/ToastContext";
import ProfilePage from "./components/user/ProfilePage";
import TryCommentPage from "./pages/TryCommentPage";
import CommentProvider from "./context/CommentProvider";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <CommentProvider>
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
              <Route path="/comment" element={<TryCommentPage />} />
            </Routes>
          </Router>
        </CommentProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
