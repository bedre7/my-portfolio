import React from "react";
import Header from "../components/Header";
import { ReactComponent as Arrow } from "../assets/svg/forward.svg";
import { ReactComponent as Lock } from "../assets/svg/unlock.svg";
import { ReactComponent as Cog } from "../assets/svg/cog.svg";
import { ReactComponent as Time } from "../assets/svg/stopwatch.svg";
import { ReactComponent as Magic } from "../assets/svg/magic-wand.svg";
import { ReactComponent as Bulb } from "../assets/svg/bulb.svg";

const Skills = () => {
  const programmingLanguages = [
    "https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145",
    "https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642",
    "https://camo.githubusercontent.com/7a1eac05435009e58e5a990d7319fbb0e76d2f528fc3899d0ffc21636a09ee13/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163745f6e61746976652d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642",
    "https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534",
    "https://camo.githubusercontent.com/891c1fd9d2ab2adf1053e8514f469b94049769ccd9d2765c8e06e9c1b6da1b8c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632b2b2d2532333030353939432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63253242253242266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/bbae65b6de4a3ba26fbeaf00e347900385400dcd092e8b4e0f795853d24a24e3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632532332d2532333233393132302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d632d7368617270266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/f36a579a7440dd2cd03da4903249f86d0d44cb7020fd902512bccd139784b363/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2e4e45542d3543324439313f7374796c653d666f722d7468652d6261646765266c6f676f3d2e6e6574266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/6cbecd63a9a8f83ee186885c446938820ffa8304942a284ee6e1e2acb2bfd822/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612d2532334544384230302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/5859172b2d0854f4d70d35118ae1fbb8d92f967ea654f1bb1bdae4a346d03926/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632d2532333030353939432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465",
    "https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642",
    "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
  ];

  const databases = [
    "https://camo.githubusercontent.com/a65fcdf7030d79c00f4c3d8bab84de39107f5777fca4d12f0cb64440015183fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f66697265626173652d2532333033394245352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365",
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  ];

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
      <div className="flex items-center justify-start space-x-4 mt-6">
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