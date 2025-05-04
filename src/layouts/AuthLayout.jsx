import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <header className="w-11/12 py-4 mx-auto">
        <Navbar />
      </header>
      <main className="flex items-center-safe justify-center-safe mt-30">
        <Outlet/>
      </main>
    </div>
  );
};

export default AuthLayout;
