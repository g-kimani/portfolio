import BackgroundGradient from "../BackgroundGradient";
import ContactLinks from "../ContactLinks";
import SkillsCarousel from "../SkillsCarousel";

export default function IntroSection() {
  return (
    <>
      <div>
        <div className="flex flex-row  lg:mx-0 text-left">
          <div className="max-w-2xl">
            <p className="mt-16 text-md leading-8 text-gray-100">
              Welcome to my portfolio my name is...
            </p>
            <h1 className=" my-16 text-4xl font-bold tracking-tight sm:text-6xl">
              George Kimani
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              I&apos;m a dedicated Full Stack Developer based in London, UK.
              Specializing in web development, I create dynamic and engaging web
              experiences that resonate with users.
            </p>
          </div>
          <div className="flex  flex-col items-center justify-center w-full">
            <p>You can contact me on any of my socials</p>
            <div className="scale-110 my-4">
              <ContactLinks size="large" />
            </div>
          </div>
        </div>
        <BackgroundGradient />
        <div className="mt-8">
          <SkillsCarousel />
        </div>
      </div>
    </>
  );
}
