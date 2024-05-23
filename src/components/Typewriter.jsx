/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function Typewriter({ texts, speed, className }) {
  const textContainer = useRef(null);
  const [index, setIndex] = useState(0);
  const [currentText] = useState(0);
  function typeWriter() {
    if (index < texts[currentText].length) {
      textContainer.current.innerHTML += texts[currentText].charAt(index);
      setIndex((a) => a + 1);
    }
    // if (index >= texts[currentText].length) {
    //   textContainer.current.innerHTML = "";
    //   setIndex(() => 0);
    // }
    setTimeout(typeWriter, 50);
  }

  useEffect(() => {
    typeWriter();
  });
  return (
    <>
      <h2 className={className} ref={textContainer}></h2>
    </>
  );
}
