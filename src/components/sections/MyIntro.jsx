import ScrambleText from "../ScrambleText";
import AvatarImg from "../../assets/avatar.jpg";

export default function MyIntro({ className }) {
  return (
    <>
      <div id="intro" className={className}>
        <div className="flex flex-col items-center max-w-[80%] sm:max-w-[50%]  m-auto">
          <div className="flex flex-col-reverse items-center sm:flex-row">
            <div>
              <h1 className="sm:text-xl text-2xl tracking-tight text-gray-900 dark:text-stone-200 my-2">
                Welcome to my portfolio my name is... <br></br>
                <span className="sm:text-6xl font-bold">George Kimani</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-stone-200">
                I&apos;m a dedicated{" "}
                <ScrambleText
                  text={"Full Stack Developer"}
                  className={"font-bold"}
                />{" "}
                based in London, UK. Specializing in web development, I create
                dynamic and engaging web experiences that resonate with users.
              </p>
              <br></br>
              <p className="text-lg mb-5">✅ I am currently open to work</p>
            </div>
            {/*! Could create a flippable avatar card that also shows an image of me */}
            <img
              src={AvatarImg}
              className="sm:block rounded-full w-52 h-52 border-dashed border-2 border-black dark:border-white"
              alt="Avatar of me"
              title="My avatar"
            />
          </div>
          <div className="flex w-full justify-between mt-10">
            {/* WE can change this to have an animated underline */}
            <a href="#about" className="text-xl hover:underline ">
              About me 👤
            </a>
            <a href="#projects" className="text-xl hover:underline">
              Latest Projects 📃
            </a>
            <a href="#skills" className="text-xl hover:underline">
              My Skills 🎯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

MyIntro.propTypes = {
  className: "string",
};
