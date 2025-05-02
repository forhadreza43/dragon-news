import React from "react";
import { NavLink, useNavigate } from "react-router";
import user from "../../assets/user.png";
const Navbar = () => {
  const navigate = useNavigate();
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/career">Career</NavLink>
    </>
  );
  return (
    <div className="grid grid-cols-3">
      <div></div>
      <div className="space-x-3 place-self-center-safe text-accent">
        {links}
      </div>
      <div className="flex items-center gap-3 place-self-end-safe">
        <img src={user} alt="" />
        <button
          onClick={() => navigate("/login")}
          className="bg-primary px-8 py-2 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
