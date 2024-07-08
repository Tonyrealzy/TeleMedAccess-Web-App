import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { agreed } = useAuth();

  return agreed ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default ProtectedRoute;

// const ProtectedRoute = ({ children }) => {
//   const { agreed } = useAuth();

//   return agreed ? children : <Navigate to="/" />;
// };
// return <Route render={() => (agreed ? children : <Navigate to="/" />)} />;
