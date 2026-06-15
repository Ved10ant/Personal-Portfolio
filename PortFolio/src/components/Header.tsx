import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface HeaderProps {
  icon: IconDefinition;
  linkTo: string;
  containerClassName?: string;
  style?: React.CSSProperties;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ icon, linkTo, containerClassName = "", style }, ref) => {
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
      <div
        ref={ref}
        className={`navigationbr flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 ${containerClassName}`}
        style={style}
      >
        <div className="text-center sm:text-left">
          <h1 className="text-gray-400 font-sans text-sm sm:text-base md:text-lg">INDIA</h1>
          <p className="text-sm sm:text-base md:text-lg">{formattedTime}</p>
        </div>
        <div className="hidden sm:block">
          <h2 className="text-sm md:text-base lg:text-lg">vedantdighe2707@gmail.com</h2>
        </div>
        <div className="w-full sm:w-auto">
          <button className="relative w-full sm:w-auto rounded-full cursor-pointer font-bold overflow-hidden border border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg text-white group transition-colors duration-200 ease-in-out">
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
            <Link to={linkTo}>
              <FontAwesomeIcon icon={icon} size="2x" className="sm:text-3xl md:text-4xl" />
            </Link>
          </button>
        </div>
      </div>
    );
  }
);

export default Header;
