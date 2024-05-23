import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import MyIntro from "./components/sections/MyIntro";
import AboutMe from "./components/sections/AboutMe";
import MyProjects from "./components/sections/MyProjects";
import MySkills from "./components/sections/MySkills";
import MyContacts from "./components/sections/MyContacts";

function App() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const scrollContainer = document;
    const handleScroll = (e) => {
      const scrollElement = e.target.scrollingElement;
      const scrollTop = scrollElement.scrollTop;
      let currentSection = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 1;
        const sectionHeight = section.offsetHeight;
        const heightOffset = sectionHeight / 2;

        if (
          scrollTop >= sectionTop - heightOffset &&
          scrollTop < sectionTop + heightOffset
        ) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection.id);
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="scroll-container">
        <NavBar activeSection={activeSection} />
        <MyIntro className={"section sm:h-screen py-20 sm:py-40"} />
        <AboutMe className={"section sm:h-screen py-20 px-10 sm:px-40"} />
        <MyProjects className={"section sm:h-screen py-20 px-10 sm:px-40 "} />
        <MySkills className={"section sm:h-screen py-20 px-10 sm:px-40 "} />
        <MyContacts
          className={"section sm:h-screen px-20 sm:py-20 sm:px-40  "}
        />
      </div>
    </>
  );
}

export default App;
