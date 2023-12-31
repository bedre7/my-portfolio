import React from "react";
import Header from "../components/Header";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <div className="flex flex-1 flex-col justify-evenly px-5 py-10 md:px-20">
      <div>
        <Header>About me</Header>
        <p className="text-gray-300">
          I'm a junior computer engineering 💻 student at Sakarya University in
          Turkey as an international student. I'm interested in web development,
          data structures and algorithms, and artificial intelligence. I enjoy
          solving programming problems and challenges on platforms like
          LeetCode, CodeForces and Project Euler. I'm curious about how things
          work under the hood in general, which drives me to make things from
          scratch and learning new things along the way 🚀. I'm a big
          fan of football ⚽ and I support Arsenal FC. I also like playing table
          tennis 🏓 in my spare time.
        </p>
      </div>
      <h2 className="mt-16 text-xl font-semibold text-gray-300">
        My GitHub contributions
      </h2>
      <div className="mt-4 text-indigo-400">
        <GitHubCalendar
          color="rgb(129 140 248)"
          username="bedre7"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default About;
