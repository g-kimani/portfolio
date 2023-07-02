/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import "./ProjectsCarousel.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import projects from "../projects";

export default function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let cardsData = [...projects, ...projects];

  function calculateDirection(x, y, tapeLength) {
    const positionDiff = y - x;
    const normalizedDiff =
      ((positionDiff % tapeLength) + tapeLength) % tapeLength;

    if (normalizedDiff === 0) {
      return "n";
    } else if (normalizedDiff <= tapeLength / 2) {
      return "r";
    } else {
      return "l";
    }
  }

  const handleCardClick = (index) => {
    const dir = calculateDirection(currentSlide, index, cardsData.length);
    if (dir === "r") {
      sliderRef.current.slickNext();
    }
    if (dir === "l") {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <>
      <div className="slider-container p-2">
        <Slider {...settings} ref={sliderRef}>
          {cardsData.map((card, index) => (
            <div key={card.id} onClick={() => handleCardClick(index)}>
              <div
                className={`card bg-slate-200 ${
                  currentSlide % 3 === card.id - 1 ? "active" : ""
                }`}
              >
                <img src={card.image}></img>
                <div className="p-4">
                  <div className="flex flex-row py-2 gap-x-2">
                    <a href={card.github} target="_blank" rel="noreferrer">
                      <div className="rounded-full hover:bg-[#fde74c] font-semibold transition-all duration-500 p-1  flex items-center justify-center">
                        <GitHubIcon />
                      </div>
                    </a>
                    {card.liveDemo && (
                      <a href={card.liveDemo} target="_blank" rel="noreferrer">
                        <div className="rounded-full hover:bg-[#fde74c] font-semibold transition-all duration-500 p-1 px-2  flex items-center justify-center">
                          Live Demo
                        </div>
                      </a>
                    )}
                  </div>
                  <h2 className="text-base font-semibold leading-7 my-2">
                    {card.title}
                  </h2>
                  <p>{card.description}</p>
                  <div className="flex flex-row my-2 gap-2">
                    {card.tech?.map((t, index) => {
                      return (
                        <img
                          key={index}
                          src={t.src}
                          alt={t.alt}
                          title={t.alt}
                          className="h-8"
                        />
                      );
                    })}
                  </div>
                </div>
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
      style={{
        ...style,
        display: "block",
        left: "-20px",
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
          d="M15.41 16.59L14 18l-6-6 6-6 1.41 1.41L9.83 12z"
        />
      </svg>
    </div>
  );
};
