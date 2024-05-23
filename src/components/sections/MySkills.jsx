import SkillsCollage from "../SkillsCollage";

export default function MySkills({ className }) {
  return (
    <>
      <div id="skills" className={className}>
        <div className="flex flex-row flex-wrap xl:flex-nowrap justify-between gap-20">
          <div>
            <h2 className="block text-lg underline my-4 font-medium leading-6 text-center">
              My Skills
            </h2>
            <p>
              {" "}
              My core skill set includes{" "}
              <span className="text-amber-500 font-semibold">
                HTML, CSS and JavaScript
              </span>
              , however my true skill set is a firm grasp on the fundamentals of
              computer science and how those fundamentals are applied across
              languages the forming the foundation of my learning. With this
              foundation I am able to{" "}
              <span className="text-amber-500 font-semibold">
                quickly adapt
              </span>{" "}
              and apply my knowledge to different programming languages. This
              adaptability has enabled me to explore a large array of high and
              low level langauges. This has also allowed me to jump between
              various web frameworks such as{" "}
              <span className="text-amber-500 font-semibold">
                React, Vue.js and .NET.
              </span>
            </p>
            <br></br>
            <p>
              I have experience working in{" "}
              <span className="text-amber-500 font-semibold">Agile</span>{" "}
              environments, giving me a chance to experience working and
              thriving in{" "}
              <span className="text-amber-500 font-semibold">
                collaborative, fast paced develpoment teams
              </span>
              . Within these teams I have also worked with different development
              approaches such as{" "}
              <span className="text-amber-500 font-semibold">
                Test-Driven Development
              </span>
              , using tools like Jest to create robust unit testing which
              ensured the reliablity and quality of my code.
            </p>
            <br></br>
            <p>
              Furthermore, I have hands-on experience working with{" "}
              <span className="text-amber-500 font-semibold">
                {" "}
                relation databases
              </span>
              , including PostgreSQL and Microsoft SQL Server. To broaden my
              knowledge in this domain, I am actively exploring other database
              paradigms, such as document storage, used by Firestore in
              Firebase. I have also worked with{" "}
              <span className="text-amber-500 font-semibold">
                Cloud systems
              </span>{" "}
              like Microsoft Azure and Google Cloud Stroage.
            </p>
          </div>
          <div className="flex justify-center flex-col">
            <SkillsCollage />

            <div className="flex flex-row items-center gap-2 mb-2">
              <hr className="border-amber-500 grow"></hr>
              <span className="text-xl font-semibold">Still learning</span>
              <hr className="border-amber-500 grow"></hr>
            </div>
            <p>
              In my pursuit of continuous growth, I am always expanding my
              knowledge of the tools I already use and eagerly exploring new
              technologies. Currently, I am fascinated by AI technologies and
              actively researching their applications, seeking to gain a
              comprehensive understanding of how to leverage these powerful
              tools effectively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

MySkills.propTypes = {
  className: "string",
};
