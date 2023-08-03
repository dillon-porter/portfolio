import React from 'react';
import Resume from "../assets/Dillon_Porter - Resume.pdf"

const About = () => {
  return (
    <div name='about' className='pt-60 w-full h-full md:h-screen text-black-300 bg-[#fff]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pb-60'>
        <div className="text-center sm:text-left">
          <p className='text-4xl font-bold inline border-b-4 border-[#92b7fa]'>About</p>
          <p className="mt-4 mb-5 text-xl leading-normal text-gray-500">I'm a skilled Frontend Web Developer with expertise in HTML, CSS, and JavaScript. I excel in WordPress, React.js, Rest APIs, and SEO, delivering exceptional user experiences. With a perfect GPA in Web Development and a track record of successful freelance projects, I'm eager to bring my passion and expertise to your team or project. Let's create something extraordinary together. Reach out to discuss how I can contribute to your success.</p>
        </div>
        <div className="mt-1 text-center md:text-left">
          <a href={Resume} className="bg-blue-900 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded inline-block">
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};


export default About;

