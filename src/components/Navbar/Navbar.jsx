import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userImage from "../../assets/user.png";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  // const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/career">Career</NavLink>
    </>
  );
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Log Out");
        // navigate("/auth/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <div className="grid grid-cols-3">
      <div>{user && user?.email}</div>
      <div className="space-x-3 place-self-center-safe text-accent">
        {links}
      </div>
      <div className="flex items-center gap-3 place-self-end-safe">
        <img src={userImage} alt="" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="cursor-pointer bg-primary px-8 py-2 text-white"
          >
            Log out
          </button>
        ) : (
          <Link to="/auth/login" className="bg-primary px-8 py-2 text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
