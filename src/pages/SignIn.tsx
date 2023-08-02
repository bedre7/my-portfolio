import React, { FC, useEffect, useState } from "react";
import "./SignIn.scss";
import Profile from "../assets/img/me.jpg";

const SignIn: FC<{ onSignIn: () => void }> = ({ onSignIn }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-img flex min-h-screen min-w-full items-center justify-center">
      {isBlurred && <div className="blur-overlay"></div>}
      <div className="zoom-in z-10">
        <div className="mb-5 flex w-full items-center justify-center">
          <img
            src={Profile}
            alt="profile"
            className="h-64 cursor-pointer rounded-full opacity-90 transition-all duration-100 hover:opacity-100"
          />
        </div>
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
          className="mt-2 w-full animate-pulse overflow-hidden rounded-lg border-[1px] border-transparent bg-gradient-to-r from-purple-600 to-pink-600 p-2 text-center text-xl font-semibold transition-all duration-100 hover:animate-none hover:border-purple-600 hover:bg-gradient-to-r hover:from-transparent hover:to-transparent hover:text-purple-600 focus:outline-none"
          onClick={onSignIn}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignIn;
