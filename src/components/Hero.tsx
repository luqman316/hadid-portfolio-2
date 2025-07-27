"use client";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import VideoSection from "./VideoSection";
import Link from "next/link";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  // type: "tween",
  ease: "easeInOut" as const,
  duration: 0.8,
};
function Hero() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          key="main-page"
        >
          <div className=" min-h-[400px] text-black py-5 overflow-x-hidden">
            <div className="container mx-auto px-2 sm:px-4 w-full">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 py-5 mt-2 md:mt-5 items-center w-full">
                {/* first div: always first on mobile, left on desktop */}
                <div className="text-white flex flex-col order-1 w-full md:order-1 md:w-auto">
                  {/* name and greeting */}
                  <div>
                    <h1 className="text-xl xs:text-2xl sm:text-3xl flex items-center gap-2 sm:gap-3 font-bold">
                      Hi{" "}
                      <span className="text-3xl sm:text-4xl">
                        <FontAwesomeIcon
                          icon={faHandsClapping}
                          className="size-7 sm:size-9 text-yellow-500"
                        />
                      </span>
                      <span className="">I am</span>
                    </h1>
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mt-2 bg-gradient-to-l from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
                      HADID ALI
                    </h1>
                  </div>
                  {/* role */}
                  <h1 className="mt-2 sm:mt-3 text-lg xs:text-2xl sm:text-4xl font-bold">
                    GAME DEVELOPER
                  </h1>

                  {/* description */}
                  <p className="mt-3 sm:mt-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Are you looking for a modern, high-performance, and fully
                    responsive game?
                    <span className="hidden xs:inline">
                      {" "}
                      You are in the right place!
                    </span>
                  </p>

                  {/* buttons */}
                  <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 mt-4">
                    <button className="flex items-center gap-2 hover:cursor-pointer hover:text-black px-4 py-2 xs:px-5 xs:py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-900 to-yellow-500 text-white rounded-md transition duration-300 text-xs xs:text-sm sm:text-base w-full xs:w-auto">
                      <Link href="/work" className="flex items-center gap-2">
                        View My Work
                      </Link>
                      <span>
                        <FaArrowRight className="text-black" />
                      </span>
                    </button>
                    <button className="flex items-center gap-2 hover:cursor-pointer border border-black px-4 py-2 xs:px-5 xs:py-2 sm:px-6 sm:py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-300 text-xs xs:text-sm sm:text-base w-full xs:w-auto">
                      Contact Me
                      <span>
                        <MdEmail className="text-black" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* second div: always second on mobile, right on desktop */}
                <div className="text-black border border-l-red-500 border-t-red-500 border-b-red-500 border-r-transparent rounded-l-full p-0 flex order-2 md:order-2 w-full h-full justify-center items-center min-h-[180px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[380px] overflow-x-hidden">
                  {/* video */}
                  <div className="w-full h-full flex items-center justify-center overflow-x-hidden">
                    <VideoSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Hero;
