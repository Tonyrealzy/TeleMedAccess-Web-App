import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { sessionID } = useAuth();

  return sessionID ? children : <Navigate to='/initSession'/>;
};

export default ProtectedRoute;
