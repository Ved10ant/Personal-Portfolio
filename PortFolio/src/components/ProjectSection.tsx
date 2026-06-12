import { useEffect, useMemo, useState, useRef } from "react";
import project1 from "../assets/Images/project1.png";
import project2 from "../assets/Images/project2.png";
import project3 from "../assets/Images/project3.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "../assets/Resume VedantDighe.pdf";

gsap.registerPlugin(ScrollTrigger);

type CountUpNumberProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
};

const CountUpNumber = ({
  end,
  durationMs = 2000,
  suffix = "",
}: CountUpNumberProps) => {
  const [value, setValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);

  const safeEnd = useMemo(
    () => (Number.isFinite(end) ? Math.max(0, Math.floor(end)) : 0),
    [end]
  );
  const safeDuration = useMemo(
    () => (durationMs && durationMs > 0 ? durationMs : 2000),
    [durationMs]
  );

  useEffect(() => {
    if (!ref.current) return;

    let rafId = 0;
    let scrollTrigger: ScrollTrigger | null = null;

    scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () => {
        let startTs: number | null = null;

        const step = (ts: number) => {
          if (startTs === null) startTs = ts;
          const elapsed = ts - startTs;
          const progress = Math.min(1, elapsed / safeDuration);
          const eased = 1 - (1 - progress) * (1 - progress);
          const current = Math.round(eased * safeEnd);
          setValue(current);
          if (progress < 1) rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);
        ScrollTrigger.refresh();
      },
    });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [safeEnd, safeDuration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const ProjectSection = () => {
  const projectTitle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectTitle.current) {
      const animation = gsap.fromTo(
        projectTitle.current,
        {
          y: -120,
          opacity: 0,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectTitle.current,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === projectTitle.current) {
            trigger.kill();
          }
        });
      };
    }
  }, []);

  return (
    <div className="min-h-screen w-full text-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-30 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Title */}
      <div ref={projectTitle}>
        <div className="flex justify-between items-center pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">//</p>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.5em] font-semibold">FEATURED WORKS</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">//</p>
        </div>

        <h2 className="sectiontitle pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 text-center text-neutral-300 text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4">
          A curated selection of projects that reflect our commitment to
          <br className="hidden sm:block" />
          simplicity and purposeful design.
        </h2>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col md:flex-row justify-center md:justify-around flex-wrap gap-6 sm:gap-8 md:gap-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        {/* Project 1 */}
        <div className="mt-6 sm:mt-8 md:mt-10 mx-auto w-full max-w-sm sm:max-w-md">
          <img className="rounded-2xl sm:rounded-3xl md:rounded-4xl w-full h-auto max-h-60 sm:max-h-72 md:max-h-80 object-cover" src={project1} alt="" />
          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.3em] ml-2 sm:ml-3 font-semibold">
            HOME INTERIOR
          </h1>
          <div className="ml-2 sm:ml-3 gap-1 sm:gap-2 flex flex-wrap">
            <h2 className="border rounded-2xl sm:rounded-3xl text-[10px] sm:text-xs md:text-[13px] p-1 px-2">REACT</h2>
            <h2 className="border rounded-2xl sm:rounded-3xl text-[10px] sm:text-xs md:text-[13px] p-1 px-2">TAILWIND</h2>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mt-6 sm:mt-8 md:mt-10 mx-auto w-full max-w-sm sm:max-w-md">
          <div className="rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden w-full h-48 sm:h-56 md:h-60 bg-gray-800 flex items-center justify-center">
            <img
              className="w-full h-full object-center"
              src={project3}
              alt=""
            />
          </div>
          <div className="mt-3 sm:mt-4 ml-2 sm:ml-0 md:text-center">
            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.3em] font-semibold">GREENY</h1>
            <div className="gap-1 sm:gap-2 flex justify-start md:justify-center flex-wrap">
              <h2 className="border rounded-2xl sm:rounded-3xl text-[10px] sm:text-xs md:text-[13px] p-1 px-2">TAILWIND</h2>
              <h2 className="border rounded-2xl sm:rounded-3xl text-[10px] sm:text-xs md:text-[13px] p-1 px-2">REACT</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-30 flex flex-col items-center pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <img className="rounded-2xl sm:rounded-3xl md:rounded-4xl w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto px-2 sm:px-4 md:px-6 lg:px-0" src={project2} alt="" />
        <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.3em] ml-2 sm:ml-3 font-semibold">ATHLO</h1>
        <div className="ml-2 sm:ml-3 gap-1 sm:gap-2 flex flex-wrap">
          <h2 className="border rounded-2xl sm:rounded-3xl text-[10px] sm:text-xs md:text-[13px] px-2 py-1">REACT</h2>
          <h2 className="border rounded-2xl sm:rounded-3xl text-[10px] sm:text-xs md:text-[13px] px-2 py-1">TAILWIND</h2>
        </div>
      </div>

      {/* Counter Animation Section */}
      <section className="w-full text-white mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Stat 1 */}
            <div>
              <div className="border-t border-neutral-500 pt-3 sm:pt-4 text-neutral-400 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase flex items-center gap-1 sm:gap-2">
                <span>//</span>
                <h1 className="text-[10px] sm:text-xs md:text-sm">WEB DEV EXPERIENCE</h1>
                <span>//</span>
              </div>
              <div className="mt-4 sm:mt-6 md:mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[144px] leading-none font-semibold">
                <CountUpNumber end={2} suffix="+" />
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="border-t border-neutral-500 pt-3 sm:pt-4 text-neutral-400 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase flex items-center gap-1 sm:gap-2">
                <span>//</span>
                <span className="text-[10px] sm:text-xs md:text-sm">Projects completed</span>
                <span>//</span>
              </div>
              <div className="mt-4 sm:mt-6 md:mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[144px] leading-none font-semibold">
                <CountUpNumber end={4} suffix="+" />
              </div>
            </div>

            {/* Stat 3 */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="border-t border-neutral-500 pt-3 sm:pt-4 text-neutral-400 text-[10px] sm:text-xs tracking-wider uppercase flex items-center gap-1 sm:gap-2 justify-between">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span>//</span>
                  <span className="text-[10px] sm:text-xs md:text-sm">FRAMEWORKS & TECHNOLOGIES</span>
                  <span>//</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 md:mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[144px] leading-none font-semibold">
                <CountUpNumber end={10} suffix="+" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Button */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-25 flex justify-center pb-6 sm:pb-8">
        <button className="relative w-full max-w-xs sm:w-auto rounded-full cursor-pointer font-semibold overflow-hidden border border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white group transition-colors duration-200 ease-in-out">
          <Link
            to={resume}
            download="resume"
            className="relative z-10 group-hover:text-black transition-colors duration-200"
          >
            DOWNLOAD &nbsp; RESUME
          </Link>
          <span
            className="absolute left-0 bottom-0 w-full h-0 bg-white z-0 group-hover:h-full transition-all duration-300 ease-out"
            style={{ transitionProperty: "height" }}
          ></span>
        </button>
      </div>

      <hr className="my-6 sm:my-8 border-t-1 border-gray-600 w-full" />
    </div>
  );
};

export default ProjectSection;