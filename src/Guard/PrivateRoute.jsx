import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { hasToken } = useAuth();

  return !!hasToken ? children : <Navigate to="/" />;
};

export default PrivateRoute;
