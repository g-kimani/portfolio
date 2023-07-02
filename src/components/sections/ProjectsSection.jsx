import BackgroundGradient from "../BackgroundGradient";
import ProjectsCarousel from "../ProjectsCarousel";

export default function ProjectsSection() {
  return (
    <>
      <div>
        <p className="mt-10">
          These are some of my favourite projects. While these aren&apos;t all
          the projects that I have more are coming soon.
        </p>
        <ProjectsCarousel />
        <div className="absolute right-0 left-1/2 top-80">
          <BackgroundGradient toColor="#fde74c" />
        </div>
      </div>
    </>
  );
}
