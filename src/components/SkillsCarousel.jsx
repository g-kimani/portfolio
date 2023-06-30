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
        },
      },
    ],
  };

  return (
    <>
      <p className="text-left font-semibold text-gray-900">
        My current skill set includes:
      </p>
      <Slider {...settings}>
        {skills.map((logo, index) => (
          <div key={index} className="p-2">
            <div className="w-full bg-white-200 p-4 rounded m-1 shadow-md flex justify-center items-center transition-all hover:scale-110">
              <img className="h-40" src={logo} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

// Custom Next Arrow component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "red",
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
      className={className}
      style={{ ...style, display: "block", color: "red", left: "-20px" }}
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
