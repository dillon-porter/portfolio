import React from 'react';
import Resume from "../assets/Dillon_Porter - Resume.pdf";
import AboutText from './AboutText';
import CVButton from './CVButton';

const About = () => {
  return (
    <div name='about' className='pt-60 w-full h-full md:h-screen text-black dark:text-white bg-[#fff] dark:bg-[#1a1a1a] text-left'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pb-60'>
        <AboutText />
        <CVButton resumeLink={Resume} />
      </div>
    </div>
  );
};

export default About;



