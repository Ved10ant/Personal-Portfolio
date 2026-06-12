const WhoAmISection = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full h-full relative">
      {/* Header */}
      <div className="flex justify-between items-start mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <span className="text-lg sm:text-xl md:text-2xl">//</span>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider">WHO AM I</h2>
        <span className="text-lg sm:text-xl md:text-2xl">//</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 relative">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9em] font-bold leading-tight mb-4 sm:mb-6 md:mb-8">
              VEDANT
            </h1>
            <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xs sm:max-w-sm md:max-w-md">
              <h1 className="border border-white rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
                REACT JS
              </h1>
              <h1 className="border border-white rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
                TAILWIND
              </h1>
              <h1 className="border border-white rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
                NODE.JS
              </h1>
              <h1 className="border border-white rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
                MONGO-DB
              </h1>
              <h1 className="border border-white rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
                GSAP
              </h1>
            </div>
            <div>
              <img
                src="https://framerusercontent.com/images/cvbbjpG7b7WD1WIS75xcnJH8Ts.svg?width=88&height=88"
                alt=""
                className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-22 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-22"
              />
            </div>
          </div>

          {/* Web Developer/Designer Text */}
          <div className="leading-tight pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4em] font-bold">
              WEB DEVELOPER/
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4em] font-bold lg:absolute lg:-right-16 xl:-right-24 2xl:-right-30 lg:top-0 z-20">
              DESIGNER
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative space-y-4 sm:space-y-6 md:space-y-8 lg:mt-24 xl:mt-32 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="relative">
            <img
              className="w-full h-auto rounded-2xl sm:rounded-3xl md:rounded-4xl"
              src="https://imgs.search.brave.com/yDSYsqu2PVTCyXZyZJUG5RrPVODqHamncsBUlHlrOpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YW5hbHl0aWNzdmlk/aHlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wOS9t/ZW4tMy53ZWJw"
              alt=""
            />

            {/* Overlay Text */}
            <div className="absolute top-[50%] sm:top-[55%] md:top-[60%] right-0 text-gray-300 text-right leading-relaxed p-2 sm:p-3 md:p-4 lg:pr-4 xl:pr-5 text-xs sm:text-sm md:text-base lg:text-lg max-w-[160px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-md z-20 bg-black/50 backdrop-blur-sm rounded-l-xl sm:rounded-l-2xl">
              <p>
                I specialize in Web Development and Designing, bringing a blend of
                creativity and strategy to every project. With tools like
                FullStack, I ensure your vision comes to life seamlessly online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 sm:my-8 border-t-1 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-40 w-full max-w-6xl mx-auto border-gray-600" />
    </div>
  );
};

export default WhoAmISection;