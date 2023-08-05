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
    <div className="group flex cursor-pointer flex-col items-start justify-center space-x-5 rounded-xl bg-slate-900 transition-all hover:bg-indigo-950 md:flex-row">
      <img
        className="w-[32rem] rounded-t-xl opacity-90 transition-all hover:opacity-100 md:rounded-l-xl md:rounded-tr-none"
        src={image}
        alt={title}
      />
      <div className="flex flex-col items-start justify-between space-y-5 px-10 py-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-4">
            <img className="h-16 w-16 rounded-full" src={logo} alt={issuedBy} />
            <span className="text-xs font-bold text-gray-400">{issuedBy}</span>
          </div>
          <span className="text-sm font-bold text-gray-300">{date}</span>
        </div>
        <h2 className="text-lg font-semibold text-indigo-400">{title}</h2>
        <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
        <div className="flex w-full items-end justify-end">
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
  );
};

export default CertificateItem;
