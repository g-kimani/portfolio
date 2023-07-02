/* eslint-disable react/prop-types */
import ContactLinks from "./ContactLinks";

export default function TopNav({ active = "" }) {
  const links = ["intro", "projects", "about", "skills", "contact"];
  return (
    <>
      <div
        className={`flex flex-row fixed w-full px-8 pt-6 justify-between z-50 `}
      >
        <div className="flex flex-row items-center gap-x-4">
          {links.map((link, index) => (
            <a
              href={`#${link}`}
              key={index}
              className={`${
                active === link ? "text-2xl" : ""
              } font-semibold underline capitalize cursor-pointer transition-all duration-300 ease-in-out`}
            >
              {link} {link === "about" || link === "contact" ? "Me" : ""}
            </a>
          ))}
        </div>
        <ContactLinks />
      </div>
    </>
  );
}
