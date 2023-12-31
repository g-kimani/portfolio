import ContactLinks from "../ContactLinks";
import { useState } from "react";
import Dialog from "../Dialog";
import BackgroundGradient from "../BackgroundGradient";
import { GitHub } from "@mui/icons-material";

export default function ContactSection() {
  const [showPainting, setShowPainting] = useState(false);

  return (
    <>
      <div className="flex flex-col mt-10 p-4 justify-center items-center">
        <h2 className=" my-16 text-4xl font-bold tracking-tight sm:text-6xl">
          Thank you for viewing my portfolio.
        </h2>
        <p className="text-lg font-semibold mb-5">
          ✅ I am currently open to work
        </p>
        <p>My socials are:</p>
        <div className="my-4 text-lg scale-150">
          <ContactLinks size="large" />
        </div>
        <p className="">You can contact me on any of my socials above</p>
        <button
          className="text-base font-semibold m-5 p-1 rounded-md border-2 border-[#fde74c] hover:border-[#fff] hover:bg-[#fde74c] hover:text-black transition-all duration-500  tracking-normal"
          onClick={() => {
            setShowPainting((prev) => !prev);
          }}
        >
          {showPainting ? "Hide" : "Show"} a little extra 🎨
        </button>
        <Dialog open={showPainting} setOpen={setShowPainting} />

        <div className="flex flex-wrap mx-auto justify-center mt-10 items-center gap-8">
          <p className="">&copy; 2023 George Kimani</p>
          <a
            href="https://github.com/g-kimani/portfolio"
            target="_blank"
            className="rounded-full p-2 hover:bg-[#fde74c] hover:text-black transition-all duration-300 align-middle"
            rel="noreferrer"
          >
            <GitHub className="align-bottom" /> Source Code
          </a>
        </div>
        <BackgroundGradient to="#00ff00" />
      </div>
    </>
  );
}
