import BackgroundGradient from "../BackgroundGradient";

export default function AboutSection() {
  return (
    <>
      <div className="flex items-center h-full px-16">
        <div>
          <div className="flex items-end my-10 ">
            <p className="text-4xl font-bold tracking-tight sm:text-6xl">
              A little about me...
            </p>
          </div>
          <p>
            I have always had an interest in computers and started exploring
            programming early with tools like Scratch 2.0. My first experience
            with an actual language didn&apos;t come until a bit later in 2015
            using Visual Basic in my Computer Science class. All told I had no
            idea what I was doing but it still had me interested enough to do
            some personal research and thats when I found Python.
          </p>
          <br />
          <p>
            Python is most likely the language I have the most experience with
            (alongside JavaScript) as it was the first I ever used. I have used
            it to build custom scripts that help with my daily workflow, I have
            also used librarbies like PyGame to design simple to more complex
            games and Tkinter to build interactive user interfaces.
          </p>
          <br />
          <p>
            Since starting with python I have branched into multiple other
            languages and learnt an incomprable amout. And I&apos;m still
            learning 🤓
          </p>
          <BackgroundGradient />
        </div>
      </div>
    </>
  );
}
