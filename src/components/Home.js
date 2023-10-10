import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";

// Extracted button styles
const buttonStyles =
  "text-white rounded bg-blue-900 dark:bg-[#2e2e2e] group border-current dark:border-[#3e3e3e] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] dark:hover:bg-[#3e3e3e] hover:text-white hover:border-[#8892b0] dark:hover:border-[#4e4e4e]";

  const Home = () => {
    const [title, setTitle] = useState("");
    const titleRef = useRef("");
    const fullTitle = "Front-end Web Developer.";
  
    useEffect(() => {
      const chars = fullTitle.split("");
      let index = 0;
  
      const typingInterval = setInterval(() => {
        titleRef.current += chars[index];
        setTitle(titleRef.current);
  
        index++;
  
        if (index >= chars.length) {
          clearInterval(typingInterval);
        }
      }, 100);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, []);



  return (
    
    <div name="home" className="w-full h-screen bg-[#fff]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full">
        <header>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold dark:text-white">
            Dillon Porter
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#00205B] dark:text-gray-300">
            {title}
          </h2>
        </header>
        <main>
          <p className="mt-5 mb-5 text-xl leading-normal text-gray-500">
            I’m a front-end web developer from Newfoundland & Labrador, Canada,
            specializing in building and designing exceptional digital
            experiences. Currently, I’m focused on building responsive websites
            and web applications.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className={buttonStyles}>
                View Projects
                <span className="group-hover:rotate-90 duration-300">
                  <AiOutlineArrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;