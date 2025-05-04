import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {pathname} = useLocation();
  // console.log(pathname);
  if(loading){
    return (
      <div className="h-screen flex items-center-safe justify-center-safe">
        <div className="flex flex-col justify-center items-center">
            <span className="loading loading-xl loading-spinner"></span>
            <p className="pt-4">Loading....</p>
        </div>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={pathname}></Navigate>;
};

export default PrivateRoute;
