import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError(null);
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    if (!email || !password) {
      setError("Email and Password Should Not be empty");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        navigate("/auth/login");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="card w-full max-w-sm shrink-0 bg-base-100 p-5 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center text-xl font-semibold">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button type="submit" className="btn mt-4 btn-neutral">
            Register
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-accent">
          Already Have An Account?
          <Link to="/auth/login" className="text-red-500">
            Login
          </Link>
        </p>
        <p>{error && error}</p>
      </div>
    </div>
  );
};

export default Register;
