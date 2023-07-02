/* eslint-disable react/prop-types */
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function NavDrawer({ open, setOpen }) {
  const links = ["intro", "projects", "about", "skills", "contact"];

  return (
    <>
      <div
        className={`h-full py-4 px-8 z-50 bg-slate-200 fixed text-black -left-1 ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out`}
      >
        <button
          className="font-semibold ml-auto text-lg align-middle"
          onClick={() => setOpen(false)}
        >
          Close <ChevronRightIcon fontSize="large" />
        </button>
        <div className="flex flex-col gap-2 mt-4">
          {links.map((link, index) => (
            <a
              href={`#${link}`}
              key={index}
              className={`text-lg font-semibold underline capitalize cursor-pointer transition-all duration-300 ease-in-out`}
            >
              {link} {link === "about" || link === "contact" ? "Me" : ""}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
