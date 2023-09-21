import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("userId"));

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
