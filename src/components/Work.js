import React from 'react';
import Guildwebsite from '../assets/noideaguildwebsite.png';
import Boat from "../assets/Boat-tour.png"
import Genealogy from "../assets/Genealogy.png"
import Growing from "../assets/growing2.png"
import ReactAdvice from "../assets/react-advice-app.png"
import LandingPage from "../assets/base-apparel-landing.png"
import blogr from "../assets/blogr.png"
import Condo from "../assets/Condoblinds.png"
import ProjectGridItem from '../components/ProjectGridItem';

const projectData = [
  {
    image: Boat,
    title: "NL Boat Tours",
    demoLink: "http://nlboattours.ca/",
    tech: "Tech: WordPress",
  },
  {
    image: Genealogy,
    title: "Genealogy Website",
    demoLink: "http://www.moreyouseegenealogy.com/",
    tech: "Tech: WordPress",
  },
  {
    image: Growing,
    title: "Growing the Voices",
    demoLink: "http://growingthevoicesfestival500.com/",
    tech: "Tech: WordPress",
  },
  {
    image: Condo,
    title: "Condo Blinds",
    demoLink: "https://condoblinds.com/",
    tech: "Tech: WordPress and Elementor",
  },
  {
    image: Guildwebsite,
    title: "WoW Guild Website",
    demoLink: "https://noideaguild.netlify.app/",
    codeLink: "https://github.com/dillon-porter/guild-website",
    tech: "Tech: HTML, CSS, and JavaScript",
  },
  {
    image: blogr,
    title: "Blogr Landing Page",
    demoLink: "https://dillon-porter.github.io/Blogr-landing-page/",
    codeLink: "https://github.com/dillon-porter/Blogr-landing-page",
    tech: "Tech: HTML, CSS, and JavaScript",
  },
  {
    image: LandingPage,
    title: "Landing Page",
    demoLink: "https://dillon-porter.github.io/base-apparel-coming-soon-page/",
    codeLink: "https://github.com/dillon-porter/base-apparel-coming-soon-page",
    tech: "Tech: HTML, CSS, and JavaScript",
  },
  {
    image: ReactAdvice,
    title: "React.js Application",
    demoLink: "https://dillon-porter.github.io/react-advice-generator/",
    codeLink: "https://github.com/dillon-porter/react-advice-generator",
    tech: "Tech: HTML, CSS, and React.js",
  },
];


const Work = () => {
  return (
    <div name='work' className='pt-80 mb-5 w-full h-full md:h-screen text-black bg-[#fff] dark:bg-[#1a1a1a] dark:text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pb-60'>
        <div className="text-center sm:text-left">
          <p className='text-4xl font-bold inline border-b-4 border-[#92b7fa] dark:border-[#f5f5f5]'>Projects</p>
          <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500 dark:text-gray-400">Projects I've worked on</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projectData.map((project) => (
          <ProjectGridItem
            key={project.title}
            image={project.image}
            title={project.title}
            demoUrl={project.demoLink}
            codeUrl={project.codeLink}
            tech={project.tech}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Work;
