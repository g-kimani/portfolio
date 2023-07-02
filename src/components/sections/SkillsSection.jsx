import BackgroundGradient from "../BackgroundGradient";
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
              My core skill set includes HTML, CSS and JavaScript. I have a firm
              grasp of the fundamentals and the ability to transfer my knowledge
              to most languages by just reading the documentation. This skill
              has allowed me to experiment with multiple frameworks with little
              to no friction. Some frameworks I have used are React, Vue, .Net,
              React Native. I am also familiar with working within an Agile
              environment as well as employing Test-Driven-Development for both
              unit & integration tests with Jest. I also have experience working
              with relational databases using PostgreSQL and Microsoft SQL
              server, to broaden my knowledge on this topic I am looking into
              using other database paradigms like document storage used in
              Firestore for Firebase.
            </p>
            <br />
            <p>
              I am always expanding on my knowledge of the tools I already use
              as well as exploring new tools. My current facination is
              researching into the use of AI technologies and gaining an
              understanding of how to use these tools.
            </p>
          </div>
          <SkillsCollage />
        </div>
        <BackgroundGradient toColor="#fa824c" />
      </div>
    </>
  );
}
