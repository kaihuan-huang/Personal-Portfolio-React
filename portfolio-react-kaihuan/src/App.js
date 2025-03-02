import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import ThemeToggle from './components/ThemeToggle'; 
import { ThemeProvider } from './context/ThemeContext'; 
import React from 'react';

function App() {
  console.log("App rendering with ThemeProvider");
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Resume />
        <Contact />
        <Skills />
        <ThemeToggle /> 
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;