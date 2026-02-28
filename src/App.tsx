import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
	  <About />
	  <Services />
      <Skills />
	  <Projects />
	  <Contact/>
	  
   </>
  );
}

export default App;
