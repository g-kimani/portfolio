/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skills from "../skills";

export default function SkillsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <p className="text-left my-2 font-semibold text-gray-200">
        My current skill set includes:
      </p>
      <div className="p-2">
        <Slider {...settings}>
          {Object.values(skills).map((logo, index) => (
            <div key={index} className="p-2">
              <div className="w-full bg-slate-200 p-4 rounded m-1 shadow-md flex justify-center items-center transition-all md:hover:scale-110">
                <img
                  className="h-40"
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

// Custom Next Arrow component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-[#fde74c] hover:text-[#fde74c]`}
      style={{
        ...style,
        display: "block",
        right: "-20px",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M8.59 7.41L10 6l6 6-6 6-1.41-1.41L12.17 12z"
        />
      </svg>
    </div>
  );
};

// Custom Previous Arrow component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-[#fde74c] hover:text-[#fde74c]`}
      style={{ ...style, display: "block", left: "-20px" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M15.41 16.59L14 18l-6-6 6-6 1.41 1.41L9.83 12z"
        />
      </svg>
    </div>
  );
};

// Override default arrow styles
const overrideArrowStyles = `
  .slick-prev:before,
  .slick-next:before {
    content: '' !important;
  }
`;

// Add the override styles to your component or global CSS
const styles = document.createElement("style");
styles.innerHTML = overrideArrowStyles;
document.head.appendChild(styles);
