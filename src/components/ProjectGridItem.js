import React from "react";

const ProjectGridItem = ({ image, title, demoUrl, codeUrl, tech }) => {
    return (
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
          <span className='w-full text-2xl font-bold text-white tracking-wider text-center'>
              {title}
          </span>
  
          <div className="pt-8 text-center">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <button className="text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg">
                Live Demo
              </button>
            </a>
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 mb-6 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            )}
          </div>
          <span className="w-full text-sm font-bold text-white tracking-wider text-center">
            {tech}
          </span>
        </div>
      </div>
    );
  };
  

export default ProjectGridItem;
