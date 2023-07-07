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
      <div className="scroll-container scroll-smooth xl:h-screen xl:overflow-y-scroll xl:snap-y xl:snap-mandatory ">
        <div
          id="intro"
          className="section p-4 xl:h-screen xl:snap-start xl:py-8 xl:px-40 xl:relative"
        >
          <IntroSection />
        </div>
        <div
          id="projects"
          className="section p-4 xl:h-screen xl:snap-start xl:py-8 xl:px-40 xl:relative"
        >
          <ProjectsSection />
        </div>
        <div
          id="about"
          className="section p-4 xl:h-screen xl:snap-start xl:py-8 xl:px-40 xl:relative"
        >
          <AboutSection />
        </div>
        <div
          id="skills"
          className="section p-4 xl:h-screen xl:snap-start xl:py-8 xl:px-40 xl:relative"
        >
          <SkillsSection />
        </div>
        <div
          id="contact"
          className="section p-4 xl:h-screen xl:snap-start xl:py-8 xl:px-40 xl:relative"
        >
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default App;
