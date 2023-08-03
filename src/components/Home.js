import React from "react";
import { AiOutlineArrowRight as HiArrowNarrowRight } from 'react-icons/ai';

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full items-start">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#000] text-left">
          Dillon Porter
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#00205B] text-left">
          Front-end Web Developer.
        </h2>
        <p className="mt-5 mb-5 text-xl leading-normal text-gray-500 text-left">
          I’m a front-end web developer from Newfoundland & Labrador, Canada, specializing
          in building and designing exceptional digital
          experiences. Currently, I’m focused on building responsive websites
          and web applications.
        </p>
        <div className="text-left">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white rounded bg-blue-900 group border-current border-2 px-6 py-3 my-2  flex items-center hover:bg-[#8892b0] hover:text-white hover:border-[#8892b0]">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
