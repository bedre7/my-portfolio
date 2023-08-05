import React from "react";
import Header from "../components/Header";
import ExperienceItem from "../components/Experience/ExperienceItem";

const Experience = () => {
  return (
    <div className="flex-1 px-20 py-10">
      <Header>Experience</Header>
      <ExperienceItem
        title="Software Engineering Intern"
        companyLogo="https://media.licdn.com/dms/image/C4D0BAQFMB8bp-6JsLw/company-logo_200_200/0/1671609862379?e=2147483647&v=beta&t=LskxVh40ORWvZP6wOtqyxwNSpaGx2g_wuGv0pQGPWvM"
        company="Havas CX Istanbul"
        date="Aug 2023 - Present"
        description={[
          "Worked on a team of 5 to develop a web application for a client using React, Redux, and TypeScript.",
          "Implemented a responsive design using Tailwind CSS.",
          "Developed a Node.js server to handle API requests.",
          "Implemented a CI/CD pipeline using GitHub Actions.",
        ]}
      />
      <p className="mt-6 max-w-2xl text-gray-300">
        I am hoping to get more experience in the field of software engineering.
        If you are interested in working with me, please contact me.
      </p>
    </div>
  );
};

export default Experience;
