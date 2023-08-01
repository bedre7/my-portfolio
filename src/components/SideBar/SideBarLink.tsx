import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

const SideBarLink: FC<{ icon: ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <li className="group mx-2 mb-1.5 border-b-[1px] border-gray-500 p-2 transition-all hover:bg-gray-500">
      <NavLink
        to={`/${text === "Home" ? "" : text.toLowerCase()}`}
        className="group ml-6 flex items-center justify-start space-x-6"
        style={({ isActive }) => ({
          transform: `${isActive ? "scale(1.1)" : ""} !important`,
        })}
      >
        {icon}
        <span className="text-gray-400 transition-all group-hover:text-gray-900">
          {text}
        </span>
      </NavLink>
    </li>
  );
};

export default SideBarLink;
