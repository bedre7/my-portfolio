import React from "react";
import Header from "../components/Header";
import { ReactComponent as Arrow } from "../assets/svg/forward.svg";
import { ReactComponent as Cog } from "../assets/svg/cog.svg";
import { ReactComponent as Time } from "../assets/svg/stopwatch.svg";
import { ReactComponent as Magic } from "../assets/svg/magic-wand.svg";
import { ReactComponent as Bulb } from "../assets/svg/bulb.svg";
import { programmingLanguages, databases } from "./skills.data";

const Skills = () => {
  return (
    <div className="flex-1 px-20 py-10">
      <Header>Skills</Header>
      <div className="flex items-center justify-start space-x-4">
        <Arrow className="h-6 w-6 fill-pink-400" />
        <h2 className="text-xl font-semibold text-pink-400">
          Programming Languages / Technologies
        </h2>
      </div>
      <ul className="mt-5 flex flex-wrap">
        {programmingLanguages.map((skill, index) => (
          <li key={index} className="">
            <img src={skill} alt="skill" className="h-8" />
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-start space-x-4">
        <Arrow className="h-6 w-6 fill-pink-400" />
        <h2 className="text-xl font-semibold text-pink-400">Databases</h2>
      </div>
      <ul className="mt-5 flex flex-wrap">
        {databases.map((skill, index) => (
          <li key={index} className="">
            <img src={skill} alt="skill" className="h-8" />
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-start space-x-4">
        <Arrow className="h-6 w-6 fill-pink-400" />
        <h2 className="text-xl font-semibold text-pink-400">Soft Skills</h2>
      </div>
      <ul className="mt-5 space-y-3 font-medium text-gray-300">
        <li className="flex items-center space-x-4 fill-green-400">
          <Magic className="h-6 w-6" />
          <span>Creativity</span>
        </li>
        <li className="flex items-center space-x-4 fill-yellow-400">
          <Bulb className="h-6 w-6" />
          <span>Problem Solving</span>
        </li>
        <li className="fill flex items-center space-x-4">
          <Cog className="h-6 w-6 fill-purple-500" />
          <span>Teamwork</span>
        </li>
        <li className="flex items-center space-x-4">
          <Time className="h-6 w-6 fill-teal-400" />
          <span>Time Management</span>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
