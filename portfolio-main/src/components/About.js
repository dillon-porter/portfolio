import React from 'react';
import Resume from "../assets/Dillon_Porter - Resume.pdf"

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#fff] text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#92b7fa]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-4xl font-bold'>
              <p>Hi. I'm Dillon, nice to meet you. Please take a look around.</p>
            </div>
            <div>
            <p className="mb-5 max-w-2xl text-xl text-gray-500 lg:mx-auto">I enjoy building websites that improves
              the lives of those around me. I specialize in creating responsive websites and applications
              for clients ranging from individuals and small-businesses.</p>
              <a href={Resume}>
            <button className='text-white mt-7 w-6/12 group border-current border-2 px-6 py-3 my-2 flex items-center bg-blue-900 hover:bg-[#8892b0] hover:text-white hover:border-[#8892b0]'>
              Download my CV
            </button>
            </a>  
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default About;
