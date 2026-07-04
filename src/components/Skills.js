import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import WordPress from "../assets/WordPress.png";

const Skills = () => {
  const skills = [
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "JavaScript", img: JavaScript },
    { name: "React.js", img: ReactLogo },
    { name: "WordPress", img: WordPress },
  ];

  return (
    <section
      id="skills"
      className="w-full py-24 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="text-center sm:text-left mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-[#92b7fa]">
            Skills
          </p>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-white dark:bg-zinc-800 shadow-md hover:shadow-xl 
                         hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={`${skill.name} logo`}
                className="w-16 mx-auto mb-4"
              />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
