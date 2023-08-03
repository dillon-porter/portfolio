import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Logo from '../assets/Portfolio_Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-[80px] text-lg flex justify-between items-center px- bg-[#fff] text-gray-600 pr-12 ${
        scrolled ? 'md:shadow-lg' : ''
      }`}
    >
      <div>
        <a href="#"><img src={Logo} a href="#" alt='Logo Image' style={{ width: '120px'}} /></a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li><Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li><Link to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li><Link to="services" smooth={true} duration={500}>
          Services
        </Link>
        </li>
        <li><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li><Link to="work" smooth={true} duration={500}>
          Projects
        </Link>
        </li>
        <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#fff] text-zinc-800 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="services" smooth={true} duration={500}>
          Services
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
         Skills
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Projects
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>

          
      </ul>

      
    </div>
  );
};

export default Navbar;
