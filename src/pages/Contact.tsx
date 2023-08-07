import React from "react";
import Header from "../components/Header";
import { ReactComponent as GitHub } from "../assets/svg/github.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";
import { ReactComponent as LinkedIn } from "../assets/svg/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";

const Contact = () => {
  return (
    <div className="min-h-[94vh] flex-1 px-20 py-10">
      <Header>Contact</Header>
      <p className="text-gray-300">
        If you want to get in touch with me, you can connect with me on...
      </p>
      <div className="mt-6 flex space-x-6">
        <a
          href="https://github.com/bedre7"
          target="blank"
          className="fill-purple-500 transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <GitHub />
        </a>
        <a
          href="mailto:bedru777@gmail.com"
          target="blank"
          className="fill-teal-400 transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/bedru-umer/"
          target="blank"
          className="fill-blue-600 transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.instagram.com/"
          target="blank"
          className="fill-red-500 transition-all duration-300 hover:scale-110 hover:opacity-80"
        >
          <Instagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
