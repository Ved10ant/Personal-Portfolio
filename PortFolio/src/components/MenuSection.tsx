import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MenuSection = () => {
  // const sliderRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="text-white overflow-hidden h-full w-screen">
      <div className="navigationbr flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 mt-6 sm:mt-8">
        <div className="text-center sm:text-left">
          <h1 className="text-gray-400 font-sans text-sm sm:text-base">INDIA</h1>
          <p className="text-sm sm:text-base">{formattedTime}</p>
        </div>
        <div className="hidden sm:block">
          <h2 className="text-sm md:text-base">vedantdighe2707@gmail.com</h2>
        </div>
        <div className="w-full sm:w-auto">
          <button className="relative w-full sm:w-auto rounded-full cursor-pointer font-bold overflow-hidden border border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white group transition-colors duration-200 ease-in-out">
            <Link
              to="/contact"
              className="relative z-10 group-hover:text-black transition-colors duration-200"
            >
              CONTACT NOW
            </Link>
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-white z-0 group-hover:h-full transition-all duration-300 ease-out"
              style={{ transitionProperty: "height" }}
            ></span>
          </button>
        </div>
        <div className="cursor-pointer">
          <button className="cursor-pointer">
            <Link to="/">
              <FontAwesomeIcon icon={faXmark} size="2x" className="sm:text-3xl md:text-4xl" />
            </Link>
          </button>
        </div>
      </div>
      <hr className="my-6 border-t-1 border-gray-600 w-full max-w-6xl mx-auto" />

      <div className="relative px-4 sm:px-6 md:px-8 text-center mt-8 sm:mt-10">
        <div className="link relative mb-8 sm:mb-12">
          <Link to="/">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8em] font-semibold">HOME</h1>
            <div className="movelink absolute mt-6 sm:mt-8 md:mt-10 lg:mt-10 flex top-0 rounded-2xl bg-gray-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <div className="slideranimation flex items-center gap-4 sm:gap-6 md:gap-8 text-[#161616] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <h2 className="pl-4 sm:pl-6 md:pl-8 uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
              </div>
              <div className="slideranimation flex items-center gap-4 sm:gap-6 md:gap-8 ml-2 sm:ml-3 md:ml-4 text-[#161616] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <h2 className="pl-4 sm:pl-6 md:pl-8 uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  home
                </h2>
              </div>
            </div>
          </Link>
        </div>

        <div className="link relative mb-8 sm:mb-12">
          <Link to="/projects">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8em] font-bold">PROJECT</h1>
            <div className="movelink absolute mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex top-0 rounded-2xl bg-gray-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <div className="slideranimation1 flex items-center gap-4 sm:gap-6 md:gap-8 text-[#161616] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <h2 className="pl-4 sm:pl-6 md:pl-8 uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
              </div>
              <div className="slideranimation1 flex items-center gap-4 sm:gap-6 md:gap-8 ml-2 sm:ml-3 md:ml-4 text-[#161616] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <h2 className="pl-4 sm:pl-6 md:pl-8 uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  PROJECT
                </h2>
              </div>
            </div>
          </Link>
        </div>

        <div className="link relative">
          <Link to="/contact">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8em] font-bold">CONTACT</h1>
            <div className="movelink absolute mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex top-0 rounded-2xl bg-gray-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <div className="slideranimation3 flex items-center gap-4 sm:gap-6 md:gap-8 text-[#161616] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <h2 className="pl-4 sm:pl-6 md:pl-8 uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
              </div>
              <div className="slideranimation3 flex items-center gap-4 sm:gap-6 md:gap-8 ml-2 sm:ml-3 md:ml-4 text-[#161616] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <h2 className="pl-4 sm:pl-6 md:pl-8 uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
                <h2 className="uppercase whitespace-nowrap font-semibold">
                  CONTACT
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
