import BackgroundGradient from "../BackgroundGradient";
import ProjectsCarousel from "../ProjectsCarousel";

export default function ProjectsSection() {
  return (
    <>
      <div>
        <p className="block text-lg underline mt-10 mb-2 font-medium leading-6 text-center md:text-left">
          Projects
        </p>
        <p className="">
          These are some of my favourite projects. While these aren&apos;t all
          the projects that I have more are coming soon.
        </p>
        <ProjectsCarousel />
        <div className="absolute right-0 left-1/2 top-80">
          <BackgroundGradient to="amber-500" />
        </div>
      </div>
    </>
  );
}
