import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // while still fetching, don't redirect yet
    return <div>Loading...</div>; // or a spinner
  }

  return user ? children : <Navigate to="/login" />;
}
