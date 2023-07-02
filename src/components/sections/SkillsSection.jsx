// import BackgroundGradient from "../BackgroundGradient";
import SkillsCollage from "../SkillsCollage";

export default function SkillsSection() {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between items-center mt-10 gap-20">
          <div>
            <p className="block text-lg underline my-4 font-medium leading-6 text-center">
              My Skills
            </p>
            <p>
              My core skill set includes{" "}
              <span className="text-amber-500 font-semibold">
                HTML, CSS, and JavaScript
              </span>
              , forming the foundation of my expertise. Also with a solid grasp
              of the fundamentals, I can{" "}
              <span className="text-amber-500 font-semibold">
                quickly adapt
              </span>{" "}
              and apply my knowledge to different programming languages by
              leveraging the documentation. This adaptability has enabled me to
              explore{" "}
              <span className="text-amber-500 font-semibold">
                various frameworks
              </span>{" "}
              with ease, such as React, Vue.js, .NET, and React Native.
            </p>
            <br />
            <p>
              I have experience working in Agile environments, allowing me to{" "}
              <span className="text-amber-500 font-semibold">
                thrive in collaborative, fast-paced development teams
              </span>
              . I am experienced in employing{" "}
              <span className="text-amber-500 font-semibold">
                Test-Driven Development
              </span>{" "}
              methodologies, using tools like Jest to{" "}
              <span className="text-amber-500 font-semibold">
                create robust unit and integration tests
              </span>
              , ensuring the reliability and quality of my code.
            </p>
            <br />
            <p>
              Furthermore, I have hands-on experience working with relational
              databases, including PostgreSQL and Microsoft SQL Server. To
              broaden my knowledge in this domain, I am actively exploring other
              database paradigms, such as document storage, used by Firestore in
              Firebase. I have also worked with Cloud systems like Microsoft
              Azure and Google Cloud Storage
            </p>
            <br />
            <div className="flex flex-row items-center gap-2 mb-2">
              <hr className="border-amber-500  grow"></hr>
              <span className="text-xl font-semibold">Still learning</span>
              <hr className="border-amber-500  grow"></hr>
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
          <SkillsCollage />
        </div>
        {/* <BackgroundGradient to="#fa824c" /> */}
      </div>
    </>
  );
}
