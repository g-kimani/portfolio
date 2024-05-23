import { useEffect, useState } from "react";
import ContactLinks from "./ContactLinks";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";

export default function NavBar({ activeSection = "intro" }) {
  const links = ["intro", "about", "projects", "skills", "contact"];
  const [theme, setTheme] = useState("dark");
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  function toggleDarkMode() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");

      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <div className="z-50 fixed flex flex-row flex-wrap w-full px-20 py-4 justify-around sm:justify-between">
        <div className="hidden xl:flex flex-row backdrop-blur rounded-lg px-4 bg-white/50 dark:bg-slate-500/50 items-center gap-x-4 m-auto">
          {activeSection === ""
            ? ""
            : links.map((link, index) => (
                <a
                  key={index}
                  href={`#${link}`}
                  className={`${
                    activeSection === link ? " text-amber-500" : ""
                  } font-semibold capitalize cursor-pointer transition-all`}
                >
                  {link} {link === "about" || link === "contact" ? "Me" : ""}
                </a>
              ))}
        </div>
        <div className="flex items-center  ">
          <ContactLinks />
        </div>
        <div
          onClick={toggleDarkMode}
          className="rounded-full ml-2 transition-all duration-500 p-1 cursor-pointer hover:bg-[#fde74c] dark:hover:bg-slate-500/50"
        >
          {theme === "dark" ? <ModeNightIcon /> : <ModeNightOutlinedIcon />}
        </div>
      </div>
    </>
  );
}

NavBar.propTypes = {
  activeSection: "string",
};
