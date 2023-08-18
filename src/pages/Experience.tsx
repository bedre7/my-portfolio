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
      date: "Aug 2023 - Present",
      description: [
        "Collaborated within a team of five to conceptualize, design, and develop a clientfocused web application using React, Redux, and TypeScript, ensuring a seamless fusion of functionality and aesthetics.",
        "Contributed to the implementation of a Redis cache solution, leading to a substantial 35% reduction in data access latency and significantly boosting application responsiveness",
        "Orchestrated a streamlined CI/CD pipeline using GitHub Actions, resulting in enhanced testing, integration, and deployment efficiency while upholding high software engineering standards",
        "Engineered a robust Node.js server to proficiently manage API requests, guaranteeing a smooth and efficient data flow between client and server components.",
      ],
    },
    {
      company: "Company 2",
      logo: "https://media.licdn.com/dms/image/C4D0BAQFMB8bp-6JsLw/company-logo_200_200/0/1671609862379?e=2147483647&v=beta&t=LskxVh40ORWvZP6wOtqyxwNSpaGx2g_wuGv0pQGPWvM",
      title: "Incoming Software Engineering Intern",
      date: "Aug 2023 - Present",
      description: [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
