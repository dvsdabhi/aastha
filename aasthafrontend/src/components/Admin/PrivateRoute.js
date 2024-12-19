import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("Auth"); // Replace with your actual auth logic
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/admin" />;
  }
  return <Outlet />; // Render child routes if authenticated
};

export default PrivateRoute;
