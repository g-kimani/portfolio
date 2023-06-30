import { Link } from "react-scroll";
import ContactLinks from "./ContactLinks";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-gray-200 p-4 justify-center items-center">
        <div className="flex flex-row justify-center gap-4">
          <Link
            to="root"
            className="my-2 text-xl font-semibold underline leading-8 cursor-pointer"
            smooth
            spy
            duration={500}
          >
            Intro
          </Link>
          <Link
            to="projects"
            className="my-2 text-xl font-semibold underline leading-8 cursor-pointer"
            smooth
            spy
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="skills"
            className="my-2 text-xl font-semibold underline leading-8 cursor-pointer"
            smooth
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="footer"
            className="my-2 text-xl font-semibold underline leading-8 cursor-pointer"
            smooth
            duration={500}
          >
            Contact Me
          </Link>
          <a
            href=""
            className="my-2 text-xl font-semibold underline leading-8 cursor-pointer"
          >
            Source Code
          </a>
        </div>
        <ContactLinks />
      </div>
    </>
  );
}
