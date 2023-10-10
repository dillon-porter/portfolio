import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
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
      <Work />
      <Contact />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
