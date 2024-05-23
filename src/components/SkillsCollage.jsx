import skills from "../skills";

export default function SkillsCollage() {
  const display = Object.values(skills);
  // display.splice(15, 1);
  return (
    <>
      <div className="xl:min-w-[450px] m-auto my-4">
        <p className="block text-lg underline my-4 font-medium leading-6 text-center">
          Technologies
        </p>
        <div className="flex flex-row flex-wrap max-w-md max-h-[430px] justify-center gap-4">
          {display.map((skill, index) => (
            <div
              key={index}
              className="flex items-center transition-all xl:hover:scale-110 w-[calc((100%/5)-1rem)] aspect-square p-1 sm:p-2 backdrop-blur  bg-white/50 dark:bg-slate-500/50 "
            >
              <img src={skill.src} alt={skill.alt} title={skill.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
