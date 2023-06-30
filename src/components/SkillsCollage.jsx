import skills from "../skills";

export default function SkillsCollage() {
  return (
    <>
      <div className="flex flex-row flex-wrap max-w-md max-h-[430px] gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center transition-all hover:scale-110 w-1/5 aspect-square p-2 bg-gray-200"
          >
            <img src={skill} />
          </div>
        ))}
      </div>
    </>
  );
}
