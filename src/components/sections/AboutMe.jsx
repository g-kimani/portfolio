export default function AboutMe({ className }) {
  return (
    <>
      <div id="about" className={className}>
        <div className="">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            A little about me...
          </h2>
          <p className="mt-10">
            As stated I am a dedicated software developer with an aptitude for
            complex trouble solving. I started my adventure into programming
            back in 2015 with Python. By far my favourite scripting language,
            Python, has been with me over the years helping me to automate a
            wide range of daily tasks. Over these years, I have{" "}
            <span className="text-amber-500 font-semibold">
              accumulated extensive experience with Python
            </span>
            , making it one of my core languages{" "}
            <span className="text-amber-500 font-semibold">
              alongside JavaScript
            </span>
            .Additionally, I have explored powerfult libraries like{" "}
            <span className="text-amber-500 font-semibold"> PyGame </span> to
            develop a range of games from simple prototypes to more initricate
            projects.
          </p>
          <br></br>
          <p>
            My journey with Python served as a springboard to explore other
            programming languages. This continuous{" "}
            <span className="text-amber-500 font-semibold">
              pursuit of knowledge
            </span>{" "}
            has allowed me to acquire a{" "}
            <span className="text-amber-500 font-semibold">
              diverse skill set
            </span>{" "}
            and embrace new technologies. I thrive on the ever-evolving nature
            of software development and embrace each opportunity to{" "}
            <span className="text-amber-500 font-semibold">
              expand my expertise.
            </span>
          </p>
          <br />
          <div className="flex flex-row items-center gap-2 mb-2">
            <hr className="border-amber-500  grow"></hr>
            <span className="text-xl font-semibold">My Goals</span>
            <hr className="border-amber-500  grow"></hr>
          </div>
          <p>
            <span className="text-xl">As</span> a passionate and dedicated
            software developer, I am committed to delivering high-quality
            solutions, fostering innovation, and continuously honing my skills.
            I embrace challenges with enthusiasm, always seeking opportunities
            to learn and grow. I am excited to leverage my experience and
            expertise to create compelling and impactful projects that push the
            boundaries of what is possible.
          </p>
          <br />
          <p>
            I look forward to connecting with like-minded individuals and
            organizations, collaborating on exciting ventures, and contributing
            to the ever-evolving landscape of software development.
          </p>
        </div>
      </div>
    </>
  );
}

AboutMe.propTypes = {
  className: "string",
};
