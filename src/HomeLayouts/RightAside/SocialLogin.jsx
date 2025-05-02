import React from "react";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="mb-4 font-bold text-accent-content">login with</h3>
      <div className="space-y-2">
        <button className="btn w-full bg-white font-normal btn-outline hover:text-indigo-500">
          {" "}
          <IoLogoGoogle />
          Login with Google
        </button>
        <button className="btn w-full bg-white font-normal btn-outline hover:text-indigo-500">
          {" "}
          <IoLogoGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
