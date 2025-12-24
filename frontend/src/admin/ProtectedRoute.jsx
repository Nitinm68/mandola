import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  // Agar token nahi hai → login page
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Token hai → route allow
  return children;
}
