import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from './components/ThemeContext';


function App() {
  return (
    <ThemeProvider>
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Education />
      <Work />
      <Contact />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
