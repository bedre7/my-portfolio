import React from "react";
import Header from "../components/Header";
import ProjectItem from "../components/Project/ProjectItem";
import allProjects from "./projects.json";

const Projects = () => {
  const { projects } = allProjects;
  return (
    <div className="max-h-[94vh] flex-1 overflow-y-scroll px-20 py-10">
      <Header>&lt;Projects /&gt;</Header>
      <div>
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
    </div>
  );
};

export default Projects;
