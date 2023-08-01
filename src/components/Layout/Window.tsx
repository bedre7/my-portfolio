import React, { FC, ReactNode } from "react";
import TopBar from "./TopBar";
import SideBar from "../SideBar";

const Window: FC<{
  icon: ReactNode;
  header: string;
  content: ReactNode;
}> = ({ icon, header, content }) => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-800">
      <TopBar icon={icon} header={header} />
      <SideBar />
      {content}
    </div>
  );
};

export default Window;
