import React, { FC, ReactNode } from "react";
import TopBar from "./TopBar";

const Window: FC<{
  icon: ReactNode;
  header: string;
  content: ReactNode;
}> = ({ icon, header, content }) => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-800">
      <TopBar icon={icon} header={header} />
      {content}
    </div>
  );
};

export default Window;
