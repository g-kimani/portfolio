/* eslint-disable react/prop-types */
export default function ScrambleText({ text, className }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  function onMouse(event) {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      console.log("HAHAHA");
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 15);
  }
  return (
    <>
      <span
        data-value={text}
        onMouseOver={(event) => onMouse(event)}
        className={`uppercase font-mono ${className}`}
      >
        {text}
      </span>
    </>
  );
}
