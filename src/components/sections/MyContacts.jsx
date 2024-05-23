import { GitHub } from "@mui/icons-material";
import ContactLinks from "../ContactLinks";

export default function MyContacts({ className }) {
  return (
    <>
      <div id="contact" className={className}>
        <div className="flex flex-col my-2 sm:mt-10 p-4 justify-center items-center">
          <h2 className="my-12 sm:my-16 text-4xl font-bold tracking-tight sm:text-6xl">
            Thank you for viewing my portfolio.
          </h2>
          <p className="text-lg font-semibold mb-5">
            ✅ I am currently open to work
          </p>
          <p>My socials are:</p>
          <div className="my-4 text-lg scale-150">
            <ContactLinks size="large" />
          </div>
          <p>You can contact me on any of my socials above</p>
          <div className="flex flex-wrap mx-auto justify-center mt-10 items-center gap-8">
            <p className="">&copy; 2024 George Kimani</p>
            <a
              href="https://github.com/g-kimani/portfolio"
              target="_blank"
              className="rounded-full p-2 hover:bg-[#fde74c] hover:text-black transition-all duration-300 align-middle"
              rel="noreferrer"
            >
              <GitHub className="align-bottom" /> Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

MyContacts.propTypes = {
  className: "string",
};
