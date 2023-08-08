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
          solving programming problems and challenges on websites like LeetCode,
          CodeForces and Project Euler. I'm also interested in competitive
          programming and I'm a member of A2SV (Afirca to Silicon Valley). I'm
          curious about how things work under the hood in general, which drives
          me to make things from scratch and learning new things along the way
          🚀. Dedication, calmness and patience would be the words that describe
          me the best. I'm a big fan of football ⚽ and I support Arsenal FC. I
          also like playing table tennis 🏓 in my spare time.
        </p>
      </div>
      <div className="mt-8 flex items-start justify-start">
        <button className="cursor-pointer rounded-md border-2 border-teal-600 bg-transparent px-12 py-2 font-semibold text-teal-600 transition-all hover:bg-teal-600 hover:text-gray-200">
          See Resume
        </button>
      </div>
      <h2 className="mt-10 text-xl font-semibold text-gray-300">
        My GitHub contributions
      </h2>
      <div className="mt-6 text-teal-400">
        <GitHubCalendar
          color="teal"
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
