import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { Link } from "react-router-dom";
import axios from "axios"

const SayHelloSection = () => {
  const [time, setTime] = useState(new Date());
  const heroHeading1 = useRef<HTMLHeadingElement>(null);
  const heroHeading2 = useRef<HTMLHeadingElement>(null);
  const heroMainSection = useRef<HTMLDivElement>(null);
  const heroNavigation = useRef<HTMLDivElement>(null);
  const sayHelloTitle = useRef<HTMLHeadingElement>(null);

  // Timer effect
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    services: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Use environment-based API URL
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      await axios.post(`${apiUrl}/api/contact`, formData);

      alert("Message sent successfully ✅");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        services: "",
      });
    } catch (e) {
      alert("Something went wrong ❌");
    }
  };


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

      if (sayHelloTitle.current) {
        gsap.set(sayHelloTitle.current, {
          opacity: 0,
          y: -50,
          clipPath: "inset(100% 0 0 0)",
        });

        tl.to(
          sayHelloTitle.current,
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.2,
            clipPath: "inset(0% 0 0% 0%)",
          },
          1.5
        );
      }

      return () => {
        tl.kill();
      };
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full min-h-screen h-full px-4 sm:px-6 md:px-8 lg:px-12">
      {/* NAVIGATION */}
      <div
        ref={heroNavigation}
        className="navigationbr flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        style={{ opacity: 1 }}
      >
        <div className="text-center sm:text-left">
          <h1 className="text-gray-400 font-sans text-sm sm:text-base md:text-lg">INDIA</h1>
          <p className="text-sm sm:text-base md:text-lg">{formattedTime}</p>
        </div>
        <div className="hidden sm:block">
          <h2 className="text-sm md:text-base lg:text-lg">
            vedantdighe2707@gmail.com
          </h2>
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
          <button>
            <Link to="/menu">
              <FontAwesomeIcon icon={faGripLines} size="2x" className="sm:text-3xl md:text-4xl" />
            </Link>
          </button>
        </div>
      </div>

      <hr className="my-4 sm:my-6 border-t-1 border-gray-600 w-full" />

      {/* TITLE SECTION */}
      <div ref={heroMainSection} className="mainsection flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[14em] leading-tight lg:leading-[0.85] font-bold text-center lg:text-left lg:ml-4 xl:ml-8 2xl:ml-10 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <h1 ref={heroHeading1}>CONTACT</h1>
          <h1 ref={heroHeading2}>&nbsp; .US</h1>
        </div>
        <div className="lg:mt-20 xl:mt-24 2xl:mt-73 lg:ml-4 xl:ml-6 2xl:-ml-37 text-center lg:text-left px-4 sm:px-6 lg:px-0">
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

      <hr className="my-8 sm:my-12 md:my-16 lg:my-24 border-t-1 border-gray-600 w-full" />

      {/* SAY HELLO TITLE */}
      <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <h2 ref={sayHelloTitle} className="text-lg sm:text-xl md:text-2xl font-medium tracking-wider">
          SAY HELLO
        </h2>
      </div>

      {/* CONTACT FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6"
      >
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* First Name */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <label className="block text-sm sm:text-base md:text-lg font-medium tracking-wide">
              FIRST NAME
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Vedant"
              required
              className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 md:pb-4 text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-600"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <label className="block text-sm sm:text-base md:text-lg font-medium tracking-wide">
              LAST NAME
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Dighe" required
              className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 md:pb-4 text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-600"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <label className="block text-sm sm:text-base md:text-lg font-medium tracking-wide">
            YOUR EMAIL ID
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vedantdighe@youremail.com" required
            className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 md:pb-4 text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-gray-600"
          />
        </div>

        {/* Services Dropdown */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <label className="block text-sm sm:text-base md:text-lg font-medium tracking-wide">
            WHAT CAN WE CREATE TOGETHER?
          </label>
          <select
            name="services"
            value={formData.services}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 md:pb-4 text-gray-600 text-sm sm:text-base md:text-lg focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-black">Select Services</option>
            <option value="webdesign" className="bg-black">Web Design</option>
            <option value="webdevelopment" className="bg-black">Web Development</option>
            <option value="uiuxdesign" className="bg-black">UI/UX Design</option>
            <option value="branding" className="bg-black">Branding</option>
            <option value="ecommerce" className="bg-black">E-Commerce</option>
            <option value="fullstack" className="bg-black">Full Stack Development</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button className="relative w-full rounded-full cursor-pointer font-bold overflow-hidden border border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white group transition-colors duration-200 ease-in-out">
            <span className="relative z-10 group-hover:text-black transition-colors duration-200">
              SUBMIT
            </span>
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-white z-0 group-hover:h-full transition-all duration-300 ease-out"
              style={{ transitionProperty: "height" }}
            ></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SayHelloSection;