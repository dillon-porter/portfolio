import React from "react";
import Guildwebsite from "../assets/website.png";
import Boat from "../assets/Boat-tour.png";
import Genealogy from "../assets/Genealogy.png";
import Growing from "../assets/growing2.png";
import Voltagepowersports from "../assets/voltage_powersports.png";
import Stacibakes from "../assets/Staci-bakes.png";
import ReactAdvice from "../assets/react-advice-app.png";
import LandingPage from "../assets/base-apparel-landing.png";
import blogr from "../assets/blogr.png";

const Card = ({ img, title, demo, code, tech }) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    className="
      relative group
      h-48 md:h-52         /* same height for all cards */
      rounded-xl
      bg-cover bg-center bg-no-repeat
      shadow-md shadow-black/10 dark:shadow-black/40
      ring-1 ring-zinc-200 dark:ring-zinc-800
      overflow-hidden
    "
  >
    {/* Hover overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

    <div
      className="
        relative z-10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        flex flex-col items-center justify-center
        h-full text-center px-4
      "
    >
      <span className="text-2xl font-bold text-white">{title}</span>

      <div className="pt-6 flex gap-3 flex-wrap justify-center">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            <button className="rounded-lg px-4 py-2 bg-white text-zinc-800 font-semibold hover:bg-zinc-100">
              Live Demo
            </button>
          </a>
        )}
        {code && (
          <a href={code} target="_blank" rel="noreferrer">
            <button className="rounded-lg px-4 py-2 bg-white text-zinc-800 font-semibold hover:bg-zinc-100">
              Code
            </button>
          </a>
        )}
      </div>

      {tech && (
        <span className="mt-2 text-sm font-semibold text-white/90">
          Tech: {tech}
        </span>
      )}
    </div>
  </div>
);

const Work = () => {
  return (
    <section
      id="work"
      className="w-full py-24 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300"
    >
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="pb-8 text-center sm:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-[#92b7fa]">
            Projects
          </p>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            img={Boat}
            title="NL Boat Tours"
            demo="http://nlboattours.ca/"
            tech="WordPress"
          />
          <Card
            img={Genealogy}
            title="Genealogy Website"
            demo="http://www.moreyouseegenealogy.com/"
            tech="WordPress"
          />
          <Card
            img={Growing}
            title="Growing the Voices"
            demo="http://growingthevoicesfestival500.com/"
            tech="WordPress"
          />
          <Card
            img={Voltagepowersports }
            title="Voltage Powersports"
            demo="https://shopvoltage.ca/"
            tech="WordPress"
          />
          <Card
            img={Stacibakes}
            title="Staci Bakes"
            demo="https://stacibakes.com/"
            tech="WordPress"
          />
          <Card
            img={Guildwebsite}
            title="WoW Guild Website"
            demo="https://noideaguild.netlify.app/"
            code="https://github.com/dillon-porter/guild-website"
            tech="HTML, CSS, JavaScript"
          />
          <Card
            img={blogr}
            title="Blogr Landing Page"
            demo="https://dillon-porter.github.io/Blogr-landing-page/"
            code="https://github.com/dillon-porter/Blogr-landing-page"
            tech="HTML, CSS, JavaScript"
          />
          <Card
            img={LandingPage}
            title="Base Apparel Landing"
            demo="https://dillon-porter.github.io/base-apparel-coming-soon-page/"
            code="https://github.com/dillon-porter/base-apparel-coming-soon-page"
            tech="HTML, CSS, JavaScript"
          />
          <Card
            img={ReactAdvice}
            title="React Advice App"
            demo="https://dillon-porter.github.io/react-advice-generator/"
            code="https://github.com/dillon-porter/react-advice-generator"
            tech="HTML, CSS, React.js"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
