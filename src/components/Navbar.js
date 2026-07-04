import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = ({ dark, setDark }) => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(v => !v);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [nav]);

  const linkCls =
    "px-3 py-2 hover:opacity-80 transition-opacity cursor-pointer";

  return (
    <nav
      role="navigation"
      className="fixed inset-x-0 top-0 h-[80px] z-50
                 flex items-center justify-between px-4
                 bg-white/80 dark:bg-zinc-900/80 backdrop-blur
                 text-zinc-900 dark:text-zinc-100
                 border-b border-zinc-200 dark:border-zinc-800 shadow"
    >
      {/* Logo (scrolls to top/home) */}
      <div className="flex items-center">
        <Link to="home" smooth duration={500} aria-label="Go to top">
          <img src={Logo} alt="Dillon Porter logo" className="w-[120px]" />
        </Link>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center">
        <li className={linkCls}><Link to="home" smooth duration={500}>Home</Link></li>
        <li className={linkCls}><Link to="about" smooth duration={500}>About</Link></li>
        <li className={linkCls}><Link to="services" smooth duration={500}>Services</Link></li>
        <li className={linkCls}><Link to="skills" smooth duration={500}>Skills</Link></li>
        <li className={linkCls}><Link to="work" smooth duration={500}>Projects</Link></li>
        <li className={linkCls}><Link to="contact" smooth duration={500}>Contact</Link></li>

        {/* Theme toggle */}
        <li className="pl-2">
          <button
            onClick={() => setDark(v => !v)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-700
                       bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                       transition"
          >
            {dark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
          </button>
        </li>
      </ul>

      {/* Hamburger (mobile) */}
      <button
        onClick={toggleNav}
        className="md:hidden z-10 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#92b7fa]"
        aria-label="Toggle menu"
        aria-expanded={nav}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-6 text-3xl " +
              "bg-white/95 dark:bg-zinc-900/95 backdrop-blur text-zinc-900 dark:text-zinc-100 transition-colors"
            : "hidden"
        }
      >
        <li><Link onClick={toggleNav} to="home"     smooth duration={500}>Home</Link></li>
        <li><Link onClick={toggleNav} to="about"    smooth duration={500}>About</Link></li>
        <li><Link onClick={toggleNav} to="services" smooth duration={500}>Services</Link></li>
        <li><Link onClick={toggleNav} to="skills"   smooth duration={500}>Skills</Link></li>
        <li><Link onClick={toggleNav} to="work"     smooth duration={500}>Projects</Link></li>
        <li><Link onClick={toggleNav} to="contact"  smooth duration={500}>Contact</Link></li>

        {/* Theme toggle (mobile) */}
        <li className="mt-2">
          <button
            onClick={() => setDark(v => !v)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
            className="p-3 rounded-full border border-zinc-200 dark:border-zinc-700
                       bg-zinc-100 dark:bg-zinc-800 transition"
          >
            {dark ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
