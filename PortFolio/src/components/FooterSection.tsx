import { Link } from "react-router-dom";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const FooterSection = () => {
  const ContactTitle = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ContactTitle.current) {
      // Animate when this section comes into view
      gsap.fromTo(
        ContactTitle.current,
        {
          y: -200,
          opacity: 0,
          clipPath: "inset(100% 0 0 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ContactTitle.current,
            start: "top 60%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",

          },
        }
      );
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#161616] -mt-24 sm:-mt-32 md:-mt-40 text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
      <div ref={ContactTitle} className="max-w-6xl w-full">
        <img
          className="mb-12 sm:mb-16 md:mb-20 w-12 sm:w-16 md:w-auto"
          src="https://framerusercontent.com/images/OKN3tSB3aHvhwcvIHUBYIzHLlY.svg?width=88&height=61"
          alt=""
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
          READY TO
          <br />
          COLLABORATE?
        </h1>

        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Have a project in mind?
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Let's create something extraordinary together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-between">
          <button className="relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full cursor-pointer font-semibold overflow-hidden border border-white text-white group transition-colors duration-200 ease-in-out">
            <Link to='/contact' className="relative z-10 group-hover:text-black transition-colors duration-200">
              CONTACT NOW
            </Link>
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-white z-0 group-hover:h-full transition-all duration-300 ease-out"
              style={{ transitionProperty: "height" }}
            ></span>
          </button>
          <button className="relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full cursor-pointer font-semibold overflow-hidden border border-white text-white group transition-colors duration-200 ease-in-out">
            <span className="relative z-10 group-hover:text-black transition-colors duration-200">
              BACK TO TOP
            </span>
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-white z-0 group-hover:h-full transition-all duration-300 ease-out"
              style={{ transitionProperty: "height" }}
            ></span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default FooterSection;
