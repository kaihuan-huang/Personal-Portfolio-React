import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Resume />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <ThemeToggle />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;