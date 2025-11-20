import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Github from "../assets/Github_1.png";
import Reacting from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png"
import WordPress from "../assets/WordPress.png"
import BootStrap from "../assets/bootstrap.png"
import SEO from "../assets/SEO.png"
import SASS from "../assets/SASS.png"
import Drupal from "../assets/Drupal.png"

const Skills = () => {
  return (
    <div name='skills' className='pt-60 w-full h-full md:h-screen text-black-300 bg-[#fff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pb-60'>
          <div className="text-center sm:text-left">
              <p className='text-4xl font-bold inline border-b-4 border-[#92b7fa] '>Skills</p>
              <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500">These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p>GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={Reacting} alt="React icon" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p>Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={WordPress} alt="HTML icon" />
            <p>WordPress</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={BootStrap} alt="HTML icon" />
            <p>Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={SEO} alt="HTML icon" />
            <p>Search Engine Optimization</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={SASS} alt="HTML icon" />
            <p>SASS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 pb-4">
            <img className="w-20 mx-auto" src={Drupal} alt="HTML icon" />
            <p>Drupal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
