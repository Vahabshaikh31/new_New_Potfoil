import './Intro.css';

export function SparklesPreview() {
    return (
      <div
        className="h-[40rem] w-full z-0 flex flex-col items-center justify-center overflow-hidden rounded-md"
      >
        <h1 className="text-7xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center text-white relative ">
          Abdulvahab Shaikh
        </h1>
        <div className="w-full xs:w-[20rem] sm:w-[30rem] md:w-[40rem] h-0 relative flex flex-col items-center">
          {/* Gradients */}
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <h6 className="text-3xl text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 inline-block px-4 py-2 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent font-semibold no-underline whitespace-nowrap z-10">
            Fresher Java DSA | React Node.js Javascript
          </h6>
          <div className="hero-resume flex items-center mt-10">
            <a
              href="Abdulvahab shaikh.pdf"
              className="resumeLink"
              download={"Abdulvahab shaikh.pdf"}
            >
              <button className="relative inline-flex h-12 sm:h-14 md:h-16 lg:h-19 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl relative overflow-hidden">
                  <span className="border-red-500 absolute h-full w-[200%] left-1/2 transform -translate-x-1/2" />

                  <span
                    className="text-xl xs:text-2xl mt-3rem px-2 py-2"
                    style={{ color: "white" }}
                  >
                    Checkout Resume
                  </span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
}

export default SparklesPreview;
