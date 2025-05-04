import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    if (!email || !password) {
      setError("Email and Password Should Not be empty");
      return;
    }
    if (error === "") {
      return;
    }

    signInWithEmail(email, password)
      .then(() => {
        navigate(state ? state : "/");
        alert("Sign in Successful");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="card w-full max-w-sm shrink-0 bg-base-100 p-5 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center text-xl font-semibold">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="fieldset">
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
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn mt-4 btn-neutral">
            Login
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-accent">
          Don't Have An Account?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>
        <p>{error && error} </p>
      </div>
    </div>
  );
};

export default Login;
