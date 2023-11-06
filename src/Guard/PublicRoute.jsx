import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { hasToken } = useAuth();

  return !hasToken ? children : <Navigate to="/home" />;
};

export default PublicRoute;
