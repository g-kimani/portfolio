/* eslint-disable react/prop-types */
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
export default function ContactLinks({ size = "medium" }) {
  return (
    <>
      <div className="flex flex-row gap-x-4">
        <a href="https://github.com/g-kimani" target="_blank" rel="noreferrer">
          <div className="rounded-full hover:bg-[#fde74c] hover:text-black transition-all duration-500 p-1  flex items-center justify-center">
            <GitHubIcon fontSize={size} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/george-kimani-6929a715a/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full hover:bg-[#fde74c] hover:text-black transition-all duration-500 p-1  flex items-center justify-center">
            <LinkedInIcon fontSize={size} />
          </div>
        </a>
        <a href="mailto:georgenkimani@hotmail.com?subject=From Portfolio site">
          <div className="rounded-full hover:bg-[#fde74c] hover:text-black transition-all duration-500 p-1  flex items-center justify-center">
            <MailIcon fontSize={size} />
          </div>
        </a>
      </div>
    </>
  );
}
