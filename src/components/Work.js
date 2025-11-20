import React from 'react';
import Guildwebsite from '../assets/guildwebsite.png';
import Boat from "../assets/Boat-tour.png"
import Genealogy from "../assets/Genealogy.png"
import Growing from "../assets/growing2.png"
import Talaria from "../assets/Talaria709 website.png"
import ReactAdvice from "../assets/react-advice-app.png"
import LandingPage from "../assets/base-apparel-landing.png"
import blogr from "../assets/blogr.png"

const Work = () => {
  return (
    <div name='work' className='pt-60 w-full h-full md:h-screen text-black-300 bg-[#fff]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center sm:text-left'>
          <p className='text-4xl font-bold inline border-b-4 text-zinc-800 border-[#92b7fa]'>
            Projects
          </p>
          <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500">Check out some of my recent projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Boat})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                NL Boat Tours
              </span>
              <div className='pt-8 text-center'>
                <a href='http://nlboattours.ca/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
              </div>
              <span className='text-sm font-bold text-white tracking-wider text-center justify-center px-5'>
              Tech: WordPress
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Genealogy})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                 Genealogy Website
              </span>
              <div className='pt-8 text-center'>
                <a href='http://www.moreyouseegenealogy.com/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                  Live Demo
                  </button>
                </a>
              </div>
              <span className='ml-10 text-sm font-bold text-white tracking-wider text-center justify-center px-3.5'>
              Tech: WordPress
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Growing})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Growing the Voices
              </span>
              <div className='pt-8 text-center'>
                <a href='http://growingthevoicesfestival500.com/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                  Live Demo
                  </button>
                </a>
              </div>
              <span className='ml-10 text-sm font-bold text-white tracking-wider text-center justify-center px-3.5'>
              Tech: WordPress
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Talaria})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Talaria709
              </span>
              <div className='pt-8 text-center'>
                <a href='http://talaria709.com/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                  Live Demo
                  </button>
                </a>
              </div>
              <span className='ml-10 text-sm font-bold text-white tracking-wider text-center justify-center px-3.5'>
              Tech: WordPress
              </span>
            </div>
          </div>
            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Guildwebsite})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                WoW Guild Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://noideaguild.netlify.app/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                  Live Demo
                  </button>
                </a>
                <a href='https://github.com/dillon-porter/guild-website' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <span className='text-sm font-bold text-white tracking-wider text-center justify-center px-3.5'>
              Tech: HTML, CSS, and JavaScript
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${blogr})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Blogr Landing Page
              </span>
              <div className='pt-8 text-center'>
                <a href='https://dillon-porter.github.io/Blogr-landing-page/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                  Live Demo
                  </button>
                </a>
                <a href='https://github.com/dillon-porter/Blogr-landing-page' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <span className='text-sm font-bold text-white tracking-wider text-center justify-center px-3.5'>
              Tech: HTML, CSS, and JavaScript
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${LandingPage})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='ml-8 text-2xl font-bold text-white tracking-wider text-center'>
                Landing Page
              </span>
              <div className='pt-8 text-center'>
                <a href='https://dillon-porter.github.io/base-apparel-coming-soon-page/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                  Live Demo
                  </button>
                </a>
                <a href='https://github.com/dillon-porter/base-apparel-coming-soon-page' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <span className='text-sm font-bold text-white tracking-wider text-center justify-center px-3.5'>
              Tech: HTML, CSS, and JavaScript
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReactAdvice})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider text-center justify-center'>
                React.js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://dillon-porter.github.io/react-advice-generator/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                  Live Demo
                  </button>
                </a>
                <a href='https://github.com/dillon-porter/react-advice-generator' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <span className='text-sm font-bold text-white tracking-wider text-center justify-center px-3.5'>
              Tech: HTML, CSS, and React.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
