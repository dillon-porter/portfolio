import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold">Dillon Porter</h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-blue-900 dark:text-blue-400">
          Front-end Web Developer.
        </h2>

        <p className="mt-3 mb-5 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          I’m a front-end web developer from Newfoundland & Labrador, Canada,
          specializing in building and designing exceptional digital experiences.
          Currently, I’m focused on creating responsive websites and modern web
          applications.
        </p>

        <div>
          <Link to="work" smooth duration={500}>
            <button
              className="group flex items-center gap-2 px-6 py-3 my-2 border-2 rounded-md
                         bg-blue-900 text-white border-blue-900
                         hover:bg-blue-800 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-400
                         transition-colors"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
