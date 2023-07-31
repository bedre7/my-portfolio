import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Icon: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const navigate = useNavigate();

  return (
    <button
      className="group relative cursor-pointer rounded-md focus:ring-2 focus:ring-gray-600"
      onClick={() => navigate(alt.toLowerCase())}
    >
      <p className="absolute bottom-16 origin-bottom scale-0 transform rounded-md bg-gray-200 px-2 shadow-xl transition-all duration-150 group-hover:scale-100">
        {alt}
      </p>
      <img
        src={src}
        alt={alt}
        className="h-12 w-12 transition-all duration-300 group-hover:scale-[1.15]"
      />
    </button>
  );
};

export default Icon;
