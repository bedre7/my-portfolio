import React, { FC } from "react";
import { ReactComponent as Tick } from "../../assets/svg/checkmark.svg";

interface Props {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  link: string;
}

const ProjectItem: FC<Props> = ({
  title,
  description,
  features,
  tags,
  image,
  link,
}) => {
  const colors = [
    "bg-red-400",
    "bg-slate-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-teal-400",
    "bg-sky-400",
    "bg-emerald-400",
    "bg-cyan-400",
    "bg-violet-400",
    "bg-fuchsia-400",
    "bg-rose-400",
    "bg-orange-400",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <a
      className="group mb-8 flex max-w-5xl transform flex-col items-start justify-between space-x-5 rounded-2xl bg-slate-900 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-gray-700 hover:shadow-2xl md:max-w-[36rem]"
      href={link}
      target="blank"
    >
      <img
        className="w-full rounded-t-2xl opacity-[0.85] transition-all group-hover:opacity-100 xl:h-[285px]"
        src={image}
        alt="project snapshot"
      />
      <div className="flex-start flex flex-1 flex-col justify-start">
        <div className="w-full p-4">
          <h1 className="mb-2 text-center text-2xl font-bold text-indigo-400">
            {title}
          </h1>
          <p className="text-md text-gray-300">{description}</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-4">
                <Tick className="h-5 w-5 fill-pink-500" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-3 flex flex-wrap items-center justify-start space-x-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className={`${getRandomColor()} rounded-md px-2 py-1 text-xs font-bold text-gray-950`}
              >
                # {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
