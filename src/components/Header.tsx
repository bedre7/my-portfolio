import React, { FC, ReactNode } from "react";

const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="mb-6 text-4xl font-bold text-gray-300 ">{children}</h1>;
};

export default Header;
