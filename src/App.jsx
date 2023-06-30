import "./App.css";
import ContactLinks from "./components/ContactLinks";
import ProjectsCarousel from "./components/ProjectsCarousel";
import SkillsCarousel from "./components/SkillsCarousel";
import { Element, Link } from "react-scroll";
import SkillsCollage from "./components/SkillsCollage";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        {/* <div id="top-nav" className="flex flex-row justify-end mb-4">
          <ContactLinks />
        </div> */}
        <TopNav />
        <Element name="intro" className="h-screen">
          <div className="flex flex-row  lg:mx-0 text-left">
            <div className="max-w-2xl">
              <p className="mt-6 text-md leading-8 text-gray-600">
                Welcome to my portfolio my name is...
              </p>
              <h2 className=" my-16 text-4xl font-bold tracking-tight sm:text-6xl">
                George Kimani
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I am a Full Stack Developer based in London, UK. I have an
                obsession with coding and I am specialising in web development.
                I enjoy creating interactive web experiences that hopefully
                everyone enjoys.
              </p>
            </div>
            <div
              id="page-nav"
              className="flex flex-col w-full gap-4 justify-center items-center"
            >
              <div className="flex flex-col">
                <p>Click here to go to a section</p>

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
              </div>
            </div>
          </div>
          <div className="relative isolate px-6 pt-8 lg:px-8 pointer-events-none">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[40rem]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div>
            <SkillsCarousel />{" "}
          </div>
        </Element>
        <Element name="projects">
          <div className="h-screen">
            <h2 className="text-2xl py-2 font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
              Projects
            </h2>
            <ProjectsCarousel />
          </div>
        </Element>
        <Element name="skills">
          <div className="h-screen">
            <h2 className="text-2xl py-2 font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
              Skills
            </h2>
            <div className="flex flex-row justify-between gap-20">
              <div>
                <p>
                  My core skill set includes HTML, CSS and JavaScript. I have a
                  firm grasp of the fundamentals and the ability to transfer my
                  knowledge to most languages by just reading the documentation.
                  This skill has allowed me to experiment with multiple
                  frameworks with little to no friction. Some frameworks I have
                  used are React, Vue, .Net, React Native. I am also familiar
                  with working within an Agile environment as well as employing
                  Test-Driven-Development for both unit & integration tests with
                  Jest. I also have experience working with relational databases
                  using PostgreSQL and Microsoft SQL server, to broaden my
                  knowledge on this topic I am looking into using other database
                  paradigms like document storage used in Firestore for
                  Firebase.
                </p>
                <p>
                  I am always expanding on my knowledge of the tools I already
                  use as well as exploring new tools. My current facination is
                  researching into the use of AI technologies and gaining an
                  understanding of how to use these tools.{" "}
                </p>
                <p className="block text-lg underline my-4 font-medium leading-6 text-gray-900">
                  Little bit of history
                </p>
                <p>
                  I have always had an interest in computers and started
                  exploring programming early with tools like Scratch 2.0. My
                  first experience with an actual language didn&apos;t come
                  until a bit later in 2015 using Visual Basic in my Computer
                  Science class. All told I had no idea what I was doing but it
                  still had me interested enough to do some personal research
                  and thats when I found Python.
                </p>
                <p>
                  Python is most likely the language I have the most experience
                  with (alongside JavaScript) with as it was the first I ever
                  used. I have used it to build custom scripts that help with my
                  daily workflow, I have also used librarbies like PyGame to
                  design simple to more complex games and Tkinter to build
                  interactive user interfaces.
                </p>
                <p>
                  Since starting with python I have branched into multiple other
                  languages and learnt an incomprable amout. And I&apos;m still
                  learning 🤓
                </p>
              </div>
              <SkillsCollage />
            </div>
          </div>
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    </>
  );
}

export default App;
