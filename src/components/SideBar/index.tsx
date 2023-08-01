import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/user.svg";
import { ReactComponent as BadgeIcon } from "../../assets/svg/badge.svg";
import { ReactComponent as CertificateIcon } from "../../assets/svg/certificate.svg";
import { ReactComponent as ToolsIcon } from "../../assets/svg/tools.svg";
import { ReactComponent as BriefCaseIcon } from "../../assets/svg/briefcase.svg";
import { ReactComponent as Rocket } from "../../assets/svg/rocket.svg";
import { ReactComponent as ContactIcon } from "../../assets/svg/contact.svg";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <div className="min-h-screen w-1/5 bg-gray-900 shadow-lg">
      <ul>
        <SideBarLink
          icon={
            <HomeIcon className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="Home"
        />
        <SideBarLink
          icon={
            <ProfileIcon className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="About"
        />
        <SideBarLink
          icon={
            <BadgeIcon className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="Achievements"
        />
        <SideBarLink
          icon={
            <CertificateIcon className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="Certificates"
        />
        <SideBarLink
          icon={
            <ToolsIcon className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="Skills"
        />
        <SideBarLink
          icon={
            <BriefCaseIcon className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="Experience"
        />
        <SideBarLink
          icon={
            <Rocket className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="Projects"
        />
        <SideBarLink
          icon={
            <ContactIcon className="h-8 w-8 fill-gray-400 transition-all group-hover:fill-gray-900" />
          }
          text="Contact"
        />
      </ul>
    </div>
  );
};

export default SideBar;
