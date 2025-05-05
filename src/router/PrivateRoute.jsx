import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();
  // console.log(pathname);
  if (loading) {
    return (
      <Spinner/>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={pathname}></Navigate>;
};

export default PrivateRoute;
