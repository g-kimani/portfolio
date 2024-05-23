import GitHub from "@mui/icons-material/GitHub";
import projects from "../../projects";
import { useState } from "react";

export default function MyProjects({ className }) {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <>
      <div id="projects" className={className}>
        <h2 className="text-4xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p>Scroll through my ever expanding list of projects</p>
        <div className="flex flex-col sm:flex-row mt-4 w-full h-full gap-4">
          <div className="sm:w-1/3 sm:min-w-[33.3%] overflow-auto">
            <div className="flex flex-col max-h-40">
              {projects.map((project, index) => (
                <div key={index} className="w-full">
                  <div
                    className="py-4 max-h-40 w-fit px-2 cursor-pointer transition-all duration-500  text-black dark:text-white  hover:bg-royal-black dark:sm:hover:bg-seashell dark:sm:hover:text-black  hover:text-white my-2 rounded"
                    onClick={() => setCurrentProject(() => project)}
                  >
                    <div className="flex justify-between">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="rounded-full hover:bg-[#fde74c] font-semibold  p-1  flex items-center justify-center">
                            <GitHub />
                          </div>
                        </a>
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="rounded-full hover:bg-[#fde74c] font-semibold  p-1 px-2  flex items-center justify-center">
                              Live
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                    <p>{project.shortDescription}</p>
                  </div>
                  <hr className="hidden sm:block border-amber-500"></hr>
                </div>
              ))}
            </div>
          </div>
          <article className="px-8 py-4 flex relative transition-all dark:text-black">
            <img
              src={currentProject.image}
              className="absolute rounded top-0 left-0 w-full h-full"
            ></img>
            <div className=" z-10 backdrop-blur-sm rounded h-fit bg-slate-200/50 p-4 ">
              <h2 className=" text-4xl font-bold">{currentProject.title}</h2>
              <div className="flex my-4 justify-between">
                <div className="flex gap-2">
                  {currentProject.tech?.map((t, index) => (
                    <img
                      key={index}
                      src={t.src}
                      alt={t.alt}
                      title={t.alt}
                      className="h-8"
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full hover:bg-[#fde74c] font-semibold transition-all duration-500 p-1  flex items-center justify-center">
                      <GitHub />
                    </div>
                  </a>
                  {currentProject.liveDemo && (
                    <a
                      href={currentProject.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full hover:bg-[#fde74c] font-semibold transition-all duration-500 p-1 px-2  flex items-center justify-center">
                        Live
                      </div>
                    </a>
                  )}
                </div>
              </div>
              <p>{currentProject.description}</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

MyProjects.propTypes = {
  className: "string",
};
