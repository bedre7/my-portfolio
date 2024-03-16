import React from "react";
import Header from "../components/Header";
import ProjectItem from "../components/Project/ProjectItem";
import allProjects from "./projects.json";
import { ReactComponent as Github } from "../assets/svg/github.svg";

const Projects = () => {
  const { projects } = allProjects;
  return (
    <div className="max-h-[94vh] flex-1 overflow-y-scroll px-5 pb-60 pt-10 md:px-20">
      <Header>&lt;Projects /&gt;</Header>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {projects.map((project: any, index: number) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            features={project.features}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a
          className="rounded-lg bg-purple-600 px-16 py-2 transition-all hover:bg-purple-700"
          href="https://github.com/bedre7/"
          target="blank"
        >
          <div className="flex items-center justify-center space-x-4">
            <span className="font-semibold text-gray-200">See More</span>
            <Github className="fill-gray-200" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
