import React, { FC } from "react";
import { ReactComponent as Link } from "../../assets/svg/link.svg";
interface CertificateItemProps {
  title: string;
  description?: string;
  date: string;
  image: string;
  logo: string;
  link: string;
  issuedBy: string;
}

const CertificateItem: FC<CertificateItemProps> = ({
  title,
  description,
  date,
  image,
  logo,
  link,
  issuedBy,
}) => {
  return (
    <div className="group flex transform cursor-pointer flex-col items-start justify-center space-x-5 rounded-xl bg-slate-900 transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-indigo-950 md:max-w-[36rem]">
      <img
        className="w-full rounded-t-2xl opacity-[0.85] transition-all group-hover:opacity-100 xl:h-[285px]"
        src={image}
        alt={title}
      />
      <div className="flex-start flex flex-1 flex-col justify-start py-6 pl-4 pr-8">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex w-full flex-col items-start justify-between space-y-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  className="h-16 w-16 rounded-full"
                  src={logo}
                  alt={issuedBy}
                />
                <span className="text-xs font-bold text-gray-400">
                  {issuedBy}
                </span>
              </div>
              <span className="text-sm font-bold text-gray-300">{date}</span>
            </div>
            <h2 className="text-lg font-semibold text-indigo-400">{title}</h2>
            <p className="text-gray-400 group-hover:text-gray-300">
              {description}
            </p>
          </div>
          <div className="flex h-full w-full flex-1 items-end justify-end">
            <a
              className="fill-indigo-500 transition-all hover:fill-gray-400"
              href={link}
              target="blank"
            >
              <Link />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
