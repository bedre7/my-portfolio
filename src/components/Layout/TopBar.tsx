import React, { FC } from "react";
import { ReactComponent as CloseIcon } from "../../assets/svg/cross.svg";
import { ReactComponent as MinimizeIcon } from "../../assets/svg/minus.svg";
import { useNavigate } from "react-router-dom";

const TopBar: FC<{ icon: React.ReactNode; header: string }> = ({
  icon,
  header,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[6vh] w-full items-center justify-between rounded-t-xl bg-gray-700 pr-4 text-white shadow-lg">
      <div className="flex cursor-pointer items-center justify-center pl-10">
        {icon}
        <h3 className="pl-6 text-lg">{header}</h3>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <MinimizeIcon
          className="h-7 w-7 cursor-pointer rounded-full fill-blue-600 p-1 ring-1 transition-all hover:bg-blue-600 hover:fill-black hover:opacity-80"
          onClick={() => navigate("/")}
        />
        <CloseIcon
          className="h-7 w-7 cursor-pointer rounded-full fill-pink-600 p-1 ring-1 transition-all hover:bg-pink-600 hover:fill-black hover:opacity-80"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default TopBar;
