import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill"
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project /> 
      <Contact />
    </div>
  );
}

export default App;
