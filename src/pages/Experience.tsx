import React, { useState } from "react";
import Header from "../components/Header";
import ExperienceItem from "../components/Experience/ExperienceItem";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      company: "Havas CX Istanbul",
      logo: "https://media.licdn.com/dms/image/C4D0BAQFMB8bp-6JsLw/company-logo_200_200/0/1671609862379?e=2147483647&v=beta&t=LskxVh40ORWvZP6wOtqyxwNSpaGx2g_wuGv0pQGPWvM",
      title: "Software Engineering Intern",
      date: "Aug 2023 - Sep 2023",
      description: [
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
      ],
    },
    {
      company: "Epixlife",
      logo: "https://media.licdn.com/dms/image/D4D0BAQGPB-SuHLYGzg/company-logo_200_200/0/1688723503243?e=2147483647&v=beta&t=kOJwY-15LFEPZu2iKfXd7jC4jUfTtRD6yyK5ALAUrYA",
      title: "Full Stack Developer (Part-time)",
      date: "Sep 2023 - Present",
      description: [
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolor sit amet.",
      ],
    },
  ];

  const isActive = (index: number) => {
    return index === activeTab;
  };

  return (
    <div className="flex-1 px-5 py-10 md:px-20">
      <Header>Experience</Header>
      <div className="flex justify-center">
        <div>
          {tabs.map((tab, index) => (
            <div className="flex">
              <span
                className={`w-1 ${
                  isActive(index) ? "bg-indigo-600" : "bg-indigo-500"
                }`}
              ></span>
              <button
                className={`flex w-60 items-center space-x-3 px-8 py-2 transition-all 
                ${
                  isActive(index)
                    ? "bg-indigo-950 hover:bg-indigo-900"
                    : "bg-indigo-800 hover:bg-indigo-900"
                }`}
                key={index}
                onClick={() => setActiveTab(index)}
              >
                <img
                  className="h-14 w-14 rounded-full"
                  src={tab.logo}
                  alt={tab.company}
                />
                <span className="text-xs font-semibold text-gray-300">
                  {tab.company}
                </span>
              </button>
            </div>
          ))}
        </div>
        <ExperienceItem
          title={tabs[activeTab].title}
          date={tabs[activeTab].date}
          description={tabs[activeTab].description}
        />
      </div>
    </div>
  );
};

export default Experience;
