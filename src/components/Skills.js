import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reacting from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import WordPress from "../assets/WordPress.png";
import BootStrap from "../assets/bootstrap.png";
import SEO from "../assets/SEO.png";
import SASS from "../assets/SASS.png";
import Drupal from "../assets/Drupal.png";
import GithubLogo from "../assets/githublogo.png";

const SKILLS_DATA = [
  { name: "HTML", src: HTML, alt: "HTML icon" },
  { name: "CSS", src: CSS, alt: "CSS icon" },
  { name: "JavaScript", src: JavaScript, alt: "JavaScript icon" },
  { name: "GitHub", src: GithubLogo, alt: "Github icon" },
  { name: "React", src: Reacting, alt: "React icon" },
  { name: "Node", src: Node, alt: "Node icon" },
  { name: "Tailwind", src: Tailwind, alt: "Tailwind icon" },
  { name: "WordPress", src: WordPress, alt: "WordPress icon" },
  { name: "Bootstrap", src: BootStrap, alt: "Bootstrap icon" },
  { name: "Search Engine Optimization", src: SEO, alt: "SEO icon" },
  { name: "SASS", src: SASS, alt: "SASS icon" },
  { name: "Drupal", src: Drupal, alt: "Drupal icon" }
];

const Skills = () => {
  return (
    <div name='skills' className='pt-60 w-full h-full md:h-screen text-black bg-[#fff] dark:bg-[#1a1a1a] dark:text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pb-60'>
        <div className="text-center sm:text-left">
          <p className='text-4xl font-bold inline border-b-4 border-[#92b7fa] dark:border-[#f5f5f5]'>Skills</p>
          <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500 dark:text-gray-400">These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {SKILLS_DATA.map(skill => (
            <div key={skill.name} className="shadow-md dark:bg-gray-800 dark:text-white shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
              <img className="w-20 mx-auto" src={skill.src} alt={skill.alt} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
