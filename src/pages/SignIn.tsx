import React, { FC } from "react";
import "./SignIn.scss";
import Profile from "../assets/img/profile.png";

const SignIn: FC<{ onSignIn: () => void }> = ({ onSignIn }) => {
  return (
    <div className="bg-img flex min-h-screen min-w-full items-center justify-center">
      <div>
        <img
          src={Profile}
          alt="profile"
          className="flex w-full cursor-pointer items-center justify-center"
        />
        <h3 className="text-center text-3xl font-semibold text-gray-300">
          Bedru
        </h3>
        <input
          type="password"
          value="my password"
          readOnly={true}
          className="my-6 w-full rounded-md border-2 border-purple-400 bg-gray-800 p-2 text-lg tracking-widest text-purple-500 focus:border-purple-600 focus:outline-none"
        />
        <button
          className="mt-2 w-full animate-pulse rounded-lg border-2 border-purple-600 bg-purple-600 p-2 text-center text-xl font-semibold hover:animate-none hover:bg-transparent hover:text-purple-600"
          onClick={onSignIn}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignIn;
