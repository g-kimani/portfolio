/* eslint-disable react/prop-types */
import ContactLinks from "./ContactLinks";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavDrawer from "./NavDrawer";

export default function TopNav({ active = "" }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const links = ["intro", "projects", "about", "skills", "contact"];
  return (
    <>
      <div
        className={`flex flex-row flex-wrap bg-[#060918] fixed w-full px-8 py-4 justify-between z-50 `}
      >
        <div className="xl:hidden">
          <button onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </button>
        </div>
        <div className="hidden xl:flex flex-row items-center gap-x-4">
          {links.map((link, index) => (
            <a
              href={`#${link}`}
              key={index}
              className={`${
                active === link
                  ? "bg-vibrant-yellow text-black px-2 py-1 rounded"
                  : ""
              } font-semibold capitalize cursor-pointer transition-all duration-300 ease-in-out`}
            >
              {link} {link === "about" || link === "contact" ? "Me" : ""}
            </a>
          ))}
        </div>
        <div className="ml-auto">
          <ContactLinks />
        </div>
      </div>
      <NavDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </>
  );
}
