import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import logoanimation from "../assets/Images/logo.png";
import Header from "./Header";

const HeroSection = () => {
  const heroHeading1 = useRef<HTMLHeadingElement>(null);
  const heroHeading2 = useRef<HTMLHeadingElement>(null);
  const heroNavigation = useRef<HTMLDivElement>(null);
  const heroMainSection = useRef<HTMLDivElement>(null);
  const heroBadgeAnimation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const tl = gsap.timeline();

      if (heroHeading1.current && heroHeading2.current) {
        gsap.set([heroHeading1.current, heroHeading2.current], {
          y: -150,
          opacity: 0,
          clipPath: "inset(0 0 100% 0)",
        });

        tl.to([heroHeading1.current, heroHeading2.current], {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0% 0%)",
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.1,
        });
      }

      if (heroNavigation.current) {
        gsap.set(heroNavigation.current, {
          opacity: 0,
          y: -40,
          clipPath: "inset(100% 0 0 0)",
        });

        tl.to(
          heroNavigation.current,
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.1,
            clipPath: "inset(0% 0 0% 0%)",
          },
          1
        );
      }
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Navigation */}
      <Header
        ref={heroNavigation}
        icon={faGripLines}
        linkTo="/menu"
        containerClassName="mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        style={{ opacity: 1 }}
      />

      <hr className="my-4 sm:my-6 border-t-1 border-gray-600 w-full" />

      {/* Main Section */}
      <div ref={heroMainSection} className="mainsection flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[14em] leading-tight lg:leading-[0.85] font-bold text-center lg:text-left lg:ml-4 xl:ml-8 2xl:ml-10 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <h1 ref={heroHeading1}>VEDANT</h1>
          <h1 ref={heroHeading2}>&nbsp; .DIGHE</h1>
        </div>
        <div className="lg:mt-20 xl:mt-24 2xl:mt-70 lg:ml-4 xl:ml-6 2xl:ml-9 text-center lg:text-left px-4 sm:px-6 lg:px-0">
          <img
            src="https://framerusercontent.com/images/OKN3tSB3aHvhwcvIHUBYIzHLlY.svg?width=88&height=61"
            alt=""
            className="mx-auto lg:mx-0 w-12 sm:w-14 md:w-16 lg:w-20 2xl:w-auto"
          />
          <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-[25px] mt-4 sm:mt-6 lg:mt-8 leading-5 sm:leading-6">
            WEB DESIGNER AND <br /> DEVELOPER
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400">
            I love creating captivating and functional interfaces <br className="hidden sm:block" /> that
            evoke emotions and establish a connection <br className="hidden sm:block" /> between the brand
            and the user.
          </p>
        </div>
      </div>

      {/* Badge Animation Section */}
      <div ref={heroBadgeAnimation} className="badgeanimationsec relative mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-30 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-50">
          <img
            src="https://framerusercontent.com/images/S7P0AeoUuaYD1j1M3wxJNpmyOQ.png?width=1944&height=915"
            alt="Background"
            className="w-full max-w-6xl mx-auto h-auto px-2 sm:px-4 md:px-6 lg:px-0"
          />
        </div>

        <div className="logo absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img
            src={logoanimation}
            alt="Logo Animation"
            className="rotate-infinite w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-130"
          />
        </div>

        <div className="overflow-hidden w-full max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-15 px-2 sm:px-4 md:px-6 lg:px-0">
          <div className="flex">
            <div className="textslideranimation flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-60 text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-[17px] pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-20 2xl:pr-40 whitespace-nowrap">
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                CLEAN CODE
              </h1>
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                MODERN DESIGN
              </h1>
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                ALL TIME READY
              </h1>
            </div>
            <div className="textslideranimation flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-60 text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-[17px] pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-20 2xl:pr-40 whitespace-nowrap">
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                CLEAN CODE
              </h1>
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                MODERN DESIGN
              </h1>
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                ALL TIME READY
              </h1>
            </div>
            <div className="textslideranimation1 flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-60 text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-[17px] whitespace-nowrap">
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                CLEAN CODE
              </h1>
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                MODERN DESIGN
              </h1>
              <h1 className="inline-flex items-center">
                <FontAwesomeIcon icon={faCircle} className="pr-1 sm:pr-2" />
                ALL TIME READY
              </h1>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 sm:my-8 border-t-1 border-gray-600 w-full" />
    </div>
  );
};

export default HeroSection;