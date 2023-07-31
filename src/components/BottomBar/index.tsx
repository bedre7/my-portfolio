import React from "react";
import Home from "../../assets/img/home.png";
import Profile from "../../assets/img/profile.png";
import Badge from "../../assets/img//badge-2.png";
import Certificate from "../../assets/img/certificate.png";
import Tools from "../../assets/img/tools.png";
import BriefCase from "../../assets/img/brief-case.jpg";
import Skills from "../../assets/img/fireship.jpg";
import Contact from "../../assets/img/contact.png";
import TimeAndDate from "./TimeAndDate";
import Icon from "./Icon";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between bg-gradient-to-br from-gray-800 to-cyan-900 py-0.5">
      <div className="mx-auto flex items-center justify-center space-x-5">
        <Icon src={Home} alt="Home" />
        <Icon src={Profile} alt="About" />
        <Icon src={Badge} alt="Achievements" />
        <Icon src={Certificate} alt="Certificates" />
        <Icon src={Tools} alt="Skills" />
        <Icon src={BriefCase} alt="Experience" />
        <Icon src={Skills} alt="Projects" />
        <Icon src={Contact} alt="Contact" />
      </div>
      <TimeAndDate />
    </div>
  );
};

export default BottomBar;
