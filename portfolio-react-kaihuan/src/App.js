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
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import BlogPage from './pages/BlogPage';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <div>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Resume />
              </div>
            } />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
