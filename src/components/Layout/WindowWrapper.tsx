import React from "react";
import Window from "./Window";
import { ReactComponent as ProfileIcon } from "../../assets/svg/user.svg";
import { ReactComponent as BadgeIcon } from "../../assets/svg/badge.svg";
import { ReactComponent as CertificateIcon } from "../../assets/svg/certificate.svg";
import { ReactComponent as ToolsIcon } from "../../assets/svg/tools.svg";
import { ReactComponent as BriefCaseIcon } from "../../assets/svg/briefcase.svg";
import { ReactComponent as Rocket } from "../../assets/svg/rocket.svg";
import { ReactComponent as ContactIcon } from "../../assets/svg/contact.svg";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import Experience from "../../pages/Experience";
import Certificates from "../../pages/Certificates";

const WindowWrapper = () => {
  return (
    <Routes>
      <Route
        path="/about"
        element={
          <Window
            icon={<ProfileIcon className="fill-gray-400" />}
            header="About"
            content={<About />}
          />
        }
      />
      <Route
        path="/certificates"
        element={
          <Window
            icon={<CertificateIcon className="fill-gray-400" />}
            header="Certificates"
            content={<Certificates />}
          />
        }
      />
      <Route
        path="/skills"
        element={
          <Window
            icon={<ToolsIcon className="fill-gray-400" />}
            header="Skills"
            content={<Skills />}
          />
        }
      />
      <Route
        path="/experience"
        element={
          <Window
            icon={<BriefCaseIcon className="fill-gray-400" />}
            header="Experience"
            content={<Experience />}
          />
        }
      />
      <Route
        path="/projects"
        element={
          <Window
            icon={<Rocket className="fill-gray-400" />}
            header="Projects"
            content={<Projects />}
          />
        }
      />
      <Route
        path="/contact"
        element={
          <Window
            icon={<ContactIcon className="fill-gray-400" />}
            header="Contact"
            content={<Contact />}
          />
        }
      />
    </Routes>
  );
};

export default WindowWrapper;
