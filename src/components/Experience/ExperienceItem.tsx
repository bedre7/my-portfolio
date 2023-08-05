import React, { FC } from "react";
import { ReactComponent as Arrow } from "../../assets/svg/play3.svg";
interface Props {
  title: string;
  date: string;
  description?: string[];
}

const ExperienceItem: FC<Props> = ({ title, date, description }) => {
  return (
    <div className="flex max-w-3xl transform cursor-pointer flex-col space-y-4 rounded-lg bg-gradient-to-r from-indigo-950 to-sky-950 px-10 py-6 transition-all hover:-translate-y-1 hover:translate-x-1 md:flex-row md:space-x-6 md:space-y-0">
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-bold text-indigo-400">{title}</h3>
        <span className="text-xs font-bold text-gray-400">{date}</span>
        <ul className="mt-5">
          {description?.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Arrow className="h-8 w-6 fill-indigo-600" />
              <span className="text-sm font-semibold text-gray-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
