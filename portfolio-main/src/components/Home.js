import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#000]">
          Dillon Porter
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#00205B]">
          Front-end Web Developer.
        </h2>
        <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500 ">
          I’m a front-end web developer from Newfoundland & Labrador, Canada, specializing
          in building and designing exceptional digital
          experiences. Currently, I’m focused on building responsive websites
          and web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white bg-blue-900 group border-current border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:text-white hover:border-[#8892b0]">
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
