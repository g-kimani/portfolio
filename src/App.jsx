import "./App.css";
import { useEffect, useState } from "react";
import TopNav from "./components/TopNav";
import IntroSection from "./components/sections/IntroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      let activeSection = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 1;
        const sectionHeight = section.offsetHeight;

        if (
          scrollContainer.scrollTop >= sectionTop &&
          scrollContainer.scrollTop < sectionTop + sectionHeight
        ) {
          activeSection = section;
        }
      });

      setActiveSection(activeSection.id);
    };
    scrollContainer.addEventListener("scrollend", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scrollend", handleScroll);
    };
  }, []);

  return (
    <>
      <TopNav active={activeSection} />
      <div className="scroll-container">
        <div id="intro" className="section">
          <IntroSection />
        </div>
        <div id="projects" className="section">
          <ProjectsSection />
        </div>
        <div id="about" className="section">
          <AboutSection />
        </div>
        <div id="skills" className="section">
          <SkillsSection />
        </div>
        <div id="contact" className="section">
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default App;
