import ContactLinks from "./ContactLinks";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function TopNav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ${hasScrolled ? "fixed top-0 right-0 left-0" : ""} */}
      <div
        className={`flex flex-row justify-between transition-all duration-300 ease-in-out `}
      >
        <div className="flex flex-row gap-4">
          <Link
            to="projects"
            className="my-2 text-xl font-semibold underline leading-8 cursor-pointer"
            smooth
            spy={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="skills"
            className="my-2 text-xl font-semibold underline leading-8 cursor-pointer"
            smooth
            spy={true}
            duration={500}
          >
            Skills
          </Link>
        </div>
        <ContactLinks />
      </div>
    </>
  );
}
