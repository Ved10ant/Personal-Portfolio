import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "./Header";

const MenuSection = () => {
  return (
    <div className="text-white overflow-hidden h-full w-screen">
      <Header
        icon={faXmark}
        linkTo="/"
        containerClassName="px-4 sm:px-6 md:px-8 mt-6 sm:mt-8"
      />
      <hr className="my-6 border-t-1 border-gray-600 w-full max-w-6xl mx-auto" />

      <div className="relative px-4 sm:px-6 md:px-8 text-center mt-8 sm:mt-10">
        <div className="link relative mb-8 sm:mb-12 group">
          <Link to="/">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8em] font-semibold text-transparent bg-clip-text bg-white group-hover:opacity-10 transition-opacity duration-300">HOME</h1>
            <div className="movelink absolute top-1/2 left-0 -translate-y-1/2 flex w-full overflow-hidden rounded-full bg-gray-300 py-3 sm:py-4 md:py-6">
              <div className="slideranimation flex items-center gap-4 sm:gap-6 md:gap-8 text-[#161616] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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
              <div className="slideranimation flex items-center gap-4 sm:gap-6 md:gap-8 ml-4 sm:ml-6 md:ml-8 text-[#161616] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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

        <div className="link relative mb-8 sm:mb-12 group">
          <Link to="/projects">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8em] font-bold text-transparent bg-clip-text bg-white group-hover:opacity-10 transition-opacity duration-300">PROJECT</h1>
            <div className="movelink absolute top-1/2 left-0 -translate-y-1/2 flex w-full overflow-hidden rounded-full bg-gray-300 py-3 sm:py-4 md:py-6">
              <div className="slideranimation1 flex items-center gap-4 sm:gap-6 md:gap-8 text-[#161616] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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
              <div className="slideranimation1 flex items-center gap-4 sm:gap-6 md:gap-8 ml-4 sm:ml-6 md:ml-8 text-[#161616] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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

        <div className="link relative group">
          <Link to="/contact">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8em] font-bold text-transparent bg-clip-text bg-white group-hover:opacity-10 transition-opacity duration-300">CONTACT</h1>
            <div className="movelink absolute top-1/2 left-0 -translate-y-1/2 flex w-full overflow-hidden rounded-full bg-gray-300 py-3 sm:py-4 md:py-6">
              <div className="slideranimation3 flex items-center gap-4 sm:gap-6 md:gap-8 text-[#161616] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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
              <div className="slideranimation3 flex items-center gap-4 sm:gap-6 md:gap-8 ml-4 sm:ml-6 md:ml-8 text-[#161616] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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
