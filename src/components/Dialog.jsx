/* eslint-disable react/prop-types */
export default function Dialog({ open, setOpen }) {
  return (
    <>
      <div
        className={`fixed right-1 bottom-0 border-2 border-white rounded overflow-hidden bg-white shadow-md text-black max-w-[402px] ${
          open ? "translate-y-0 bottom-5" : "translate-y-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="relative">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg"
            alt="Storm on the Lake of Galilee by Rembrandt"
            style={{ width: "100%" }}
          />
          <p className="p-2">
            <i>Christ in the Storm on the Lake of Galilee </i>
          </p>
          <p className="px-2 text-sm">By Rembrandt</p>
          <p className="p-2">
            This is my favourite painting, I find it striking and I just thought
            I would share it 😄
          </p>
          <button
            className="bg-white text-base float-right font-semibold p-1  border-2 border-[#fde74c] hover:border-[#fff] hover:bg-[#fde74c] hover:text-black transition-all duration-500  tracking-normal"
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
