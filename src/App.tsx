import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VantaBackground from "./components/VantaBackground";
import IntroScreen from "./components/IntroScreen";
import "./App.css";

const App = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  // Ensure the content is loaded before applying any transitions
  useEffect(() => {
    if (hasEntered) {
      document.body.style.overflow = "auto"; // Unlock scrolling if it's locked initially
    }
  }, [hasEntered]);

  return (
    <div className="app-container">
      <VantaBackground />
      <div className={`intro-screen ${hasEntered ? "hidden" : ""}`}>
        <IntroScreen onEnter={handleEnter} />
      </div>
      
      <div className={`content-container ${hasEntered ? "fade-in" : ""}`}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
