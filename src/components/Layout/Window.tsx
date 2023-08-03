import React, { FC, ReactNode } from "react";
import TopBar from "./TopBar";
import SideBar from "../SideBar";

const Window: FC<{
  icon: ReactNode;
  header: string;
  content: ReactNode;
}> = ({ icon, header, content }) => {
  return (
    <div className="min-w-screen flex flex-col bg-gray-800 ">
      <TopBar icon={icon} header={header} />
      <div className="flex items-start justify-start">
        <SideBar />
        {content}
      </div>
    </div>
  );
};

export default Window;
