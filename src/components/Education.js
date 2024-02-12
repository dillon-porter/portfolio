import React from "react";
import Course1Logo from "../assets/CS50.png"; 
import Course2Logo from "../assets/W3C.png";
import Course3Logo from "../assets/John_Hopkins.png";
import DiplomaImage from "../assets/diploma-web-dev.jpg"; 
import DiplomaPDF from "../assets/Diploma.pdf"; 

const EDUCATION_DATA = [
  { name: "CS50x", src: Course1Logo, alt: "CS50", link: "https://certificates.cs50.io/778c0ab5-b848-4f3a-b291-2dd116865bd9.pdf?size=letter" },
  { name: "W3C", src: Course2Logo, alt: "W3C", link: "https://courses.edx.org/certificates/87178f3d62ca4ee590c9f6356e58c810" },
  { name: "HTML, CSS, JavaScript for Web Developers", src: Course3Logo, alt: "John Hopkins Web Developer Course", link: "https://coursera.org/share/58c8f4f852b82e352936e05481645a50" },
  { name: "Diploma in Web Development", src: DiplomaImage, link: DiplomaPDF, alt: "Diploma in Web Development" },
];

const Education = () => {
  return (
    <div name='education' className='w-full h-full md:h-screen text-black bg-[#fff] dark:bg-[#1a1a1a] dark:text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className="text-center">
          <p className='text-4xl font-bold inline border-b-4'>Education</p>
          <p className="mt-2 mb-5">Courses and Certifications I've completed</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
          {EDUCATION_DATA.map(item => (
            <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="shadow-md hover:scale-110 duration-500 text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <img className="w-auto mx-auto my-2 h-48 object-contain" src={item.src} alt={item.alt} />
              <p className="text-center">{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
