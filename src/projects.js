import NCNews from "./assets/projects/nc-news.gif";
import AirPark from "./assets/projects/airpark-demo.gif";
import ConwaysGOL from "./assets/projects/conways.gif";
import ExpoLogo from "./assets/icons/expo.png";
import skills from "./skills";

export default [
  {
    id: 1,
    title: "NC News",
    image: NCNews,
    liveDemo: "https://visionary-kashata-762e78.netlify.app/",
    github: "https://github.com/g-kimani/nc-news",
    description:
      "Welcome to the NC News Site, a react based web app that lets you view, vote and comment on a range of different articles over a range of different topics. Articles are pulled from the NC News Api project",
    tech: [skills.react, skills.psql, skills.vite, skills.express],
    // description:
    //   "As part of my 13 week bootcamp at Northcoders we were tasked with completing a Full Stack Web application by building both the backend and frontend solo within 2 weeks. A truly educational experience as this was the first time that I was faced with a deadline when building the full app solo. I am quite pleased with how the website turned out even though I might not be the best at design. ",
  },
  {
    id: 2,
    title: "AirPark",
    image: AirPark,
    github: "https://github.com/g-kimani/airpark",
    description:
      "AirPark is a Airbnb clone that lets users rent out their unused parking spaces. As my first mobile app I am really proud of how this turned out. It was part of a group project and we had 2 weeks to provide an MVP. It is a completeley Full Stack application with user authentication",
    tech: [
      skills.ts,
      skills.express,
      skills.psql,
      { src: ExpoLogo, alt: "Expo Logo" },
    ],
  },
  {
    id: 3,
    title: "Conways Game of Life",
    image: ConwaysGOL,
    github: "https://github.com/g-kimani/conways-game-of-life",
    liveDemo: "https://g-kimani.github.io/conways-game-of-life/",
    description:
      "A game following conways original rules, the game is meant to mimic the process of natural selection. I decided to clone this game as I had become facinated by how the use of simple rules could lead to complex patterns. I plan to see how I could add to these rules to show even more facinating results. Also the styling needs some work 😅",
    tech: [skills.html, skills.js],
  },
];
