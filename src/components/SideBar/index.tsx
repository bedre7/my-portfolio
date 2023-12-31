import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/user.svg";
import { ReactComponent as CertificateIcon } from "../../assets/svg/certificate.svg";
import { ReactComponent as ToolsIcon } from "../../assets/svg/tools.svg";
import { ReactComponent as BriefCaseIcon } from "../../assets/svg/briefcase.svg";
import { ReactComponent as Rocket } from "../../assets/svg/rocket.svg";
import { ReactComponent as ContactIcon } from "../../assets/svg/contact.svg";
import SideBarLink from "./SideBarLink";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="hidden h-[94vh] w-1/5 bg-gray-800 pt-6 shadow-2xl md:inline-block">
      <ul>
        <SideBarLink icon={<HomeIcon className="icon" />} text="Home" />
        <SideBarLink icon={<ProfileIcon className="icon" />} text="About" />
        <SideBarLink icon={<ToolsIcon className="icon" />} text="Skills" />
        <SideBarLink
          icon={<BriefCaseIcon className="icon" />}
          text="Experience"
        />
        <SideBarLink icon={<Rocket className="icon" />} text="Projects" />
        <SideBarLink
          icon={<CertificateIcon className="icon" />}
          text="Certificates"
        />
        <SideBarLink icon={<ContactIcon className="icon" />} text="Contact" />
      </ul>
    </div>
  );
};

export default SideBar;
