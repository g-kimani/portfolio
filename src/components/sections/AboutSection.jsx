// import BackgroundGradient from "../BackgroundGradient";

export default function AboutSection() {
  return (
    <>
      <div className="flex items-center h-full xl:px-16 text-white">
        <div className="relative">
          <div className="flex items-end my-10 ">
            <p className="text-4xl font-bold tracking-tight sm:text-6xl">
              A little about me...
            </p>
          </div>
          <p>
            I have always had a deep fascination with computers but my journey
            into the world of programming began in 2015 with Python. Python
            holds a special place in my heart as it was the language where I
            took my first programming steps. Over the years, I have{" "}
            <span className="text-amber-500 font-semibold">
              accumulated extensive experience in Python
            </span>
            , making it one of my core languages{" "}
            <span className="text-amber-500 font-semibold">
              alongside JavaScript
            </span>
            . I have leveraged its versatility to create custom scripts that
            streamline and{" "}
            <span className="text-amber-500 font-semibold">
              enhance my daily workflow
            </span>
            . Additionally, I have explored powerful libraries like PyGame to{" "}
            <span className="text-amber-500 font-semibold">
              develop a range of games
            </span>
            , from simple prototypes to more intricate projects. Tkinter,
            another Python library, has enabled me to{" "}
            <span className="text-amber-500 font-semibold">
              construct interactive user interfaces
            </span>{" "}
            with ease.
          </p>
          <br />
          <p>
            My journey with Python served as a springboard to explore various
            other programming languages. This continuous{" "}
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
          {/* // TODO - Figure out what to put on background
           <div className="absolute -right-[200px] rotate-45 -z-10 w-full">
            <BackgroundGradient />
          </div> */}
        </div>
      </div>
    </>
  );
}
