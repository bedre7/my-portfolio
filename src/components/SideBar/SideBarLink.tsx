import React, { FC, ReactNode } from "react";
import { NavLink, useMatch } from "react-router-dom";
import "./SideBar.scss";

const SideBarLink: FC<{ icon: ReactNode; text: string }> = ({ icon, text }) => {
  const isActive = !!useMatch(`/${text.toLowerCase()}`);

  return (
    <li className="group mx-2 mb-1.5 rounded-md border-b-[1px] border-gray-500 p-2 transition-all hover:translate-x-3 hover:bg-indigo-500">
      <NavLink
        to={`/${text === "Home" ? "" : text.toLowerCase()}`}
        className={`group ml-6 flex items-center justify-start space-x-6 ${
          isActive && "active"
        }}`}
      >
        {icon}
        <span
          className={`text-gray-400 transition-all group-hover:text-gray-900 ${
            isActive ? "text-indigo-400" : "text-gray-400"
          }`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
};

export default SideBarLink;
