import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import LogoLight from "../assets/logo_1.png";
import LogoDark from "../assets/logo_3.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleClick = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full h-[80px] text-lg flex justify-between items-center px- bg-[#fff] text-gray-600 pr-12 ${!scrolled ? "bg-transparent" : "bg-white"} ${scrolled ? "md:shadow-lg" : ""}`}>
            <Logo theme={theme} />
            <Menu theme={theme} toggleTheme={toggleTheme} />
            <Hamburger nav={nav} handleClick={handleClick} />
            <MobileMenu nav={nav} handleClick={handleClick} theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
};

const Logo = ({ theme }) => (
  <div>
      <Link to="home" smooth={true} duration={500}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <img src={theme === "light" ? LogoLight : LogoDark} alt="Logo" style={{ width: "130px" }} />
          </button>
      </Link>
  </div>
);


const Menu = ({ theme, toggleTheme }) => (
  <ul className="hidden md:flex">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <MenuItem to="home" label="Home" />
      <MenuItem to="about" label="About" />
      <MenuItem to="services" label="Services" />
      <MenuItem to="skills" label="Skills" />
      <MenuItem to="education" label="Education" />
      <MenuItem to="work" label="Projects" />
      <MenuItem to="contact" label="Contact" />
  </ul>
);

const MenuItem = ({ to, label }) => (
  <li>
      <Link
          to={to}
          smooth={true}
          duration={500}
          className="dark:text-white"
      >
          {label}
      </Link>
  </li>
);

const MobileMenu = ({ nav, handleClick, theme, toggleTheme }) => (
  <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#fff] dark:bg-gray-900 flex flex-col justify-center items-center"}>
      <MobileMenuItem to="home" label="Home" handleClick={handleClick} />
      <MobileMenuItem to="about" label="About" handleClick={handleClick} />
      <MobileMenuItem to="services" label="Services" handleClick={handleClick} />
      <MobileMenuItem to="skills" label="Skills" handleClick={handleClick} />
      <MobileMenuItem to="education" label="Education" handleClick={handleClick} />
      <MobileMenuItem to="work" label="Projects" handleClick={handleClick} />
      <MobileMenuItem to="contact" label="Contact" handleClick={handleClick} />
      <button onClick={toggleTheme} className="py-6 text-4xl dark:text-white">
          {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
  </ul>
);

const MobileMenuItem = ({ to, label, handleClick }) => (
  <li className="py-6 text-4xl dark:text-white">
      <Link
          onClick={handleClick}
          to={to}
          smooth={true}
          duration={500}
          className="text-black hover:text-black dark:text-white dark:hover:text-white"
      >
          {label}
      </Link>
  </li>
);

const ThemeToggle = ({ theme, toggleTheme }) => (
    <button onClick={toggleTheme} className="mr-4">
        {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
);

const Hamburger = ({ nav, handleClick }) => (
    <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
    </div>
);


export default Navbar;
