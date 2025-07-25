"use client";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import VideoSection from "./VideoSection";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  // type: "tween",
  ease: "easeInOut",
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
          <div className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-00 min-h-[400px]  text-black py-5">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 mt-5 items-center">
                {/* first div  */}
                <div className="text-white flex flex-col order-1">
                  {/* name and greeting */}
                  <div>
                    <h1 className="text-2xl sm:text-3xl flex items-center gap-3 font-bold">
                      Hi{" "}
                      <span className="text-4xl">
                        <FontAwesomeIcon
                          icon={faHandsClapping}
                          className=" size-9 text-yellow-500"
                        />
                      </span>
                      <span className="">I am</span>
                    </h1>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-2 bg-gradient-to-l from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
                      HADID ALI
                    </h1>
                  </div>
                  {/* role */}
                  <h1 className="mt-3 text-2xl sm:text-4xl font-bold">
                    GAME DEVELOPER
                  </h1>

                  {/* description */}
                  <p className="mt-4 text-gray-300 text-xs sm:text-sm">
                    Are you looking for a modern, high-performance, and fully{" "}
                    <br /> responsive game? You are in the right place!{" "}
                  </p>

                  {/* buttons */}
                  <div className="flex flex-col sm:flex-row ">
                    <button className="flex items-center gap-2 hover:cursor-pointer hover:text-black mt-5 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-900 to-yellow-500  text-white  rounded-md  transition duration-300 text-sm sm:text-base">
                      View My Work{" "}
                      <span>
                        <FaArrowRight className="text-black" />
                      </span>
                    </button>
                    <button className="flex items-center gap-2 hover:cursor-pointer mt-3 sm:mt-5 border border-black sm:ml-4 px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-300 text-sm sm:text-base">
                      Contact Me
                      <span>
                        <MdEmail className="text-black" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* second div */}
                <div className="text-black border border-l-red-300 border-t-red-300 border-b-red-300 border-r-transparent rounded-l-full p-1 flex  order-2 ">
                  {/* video */}
                  <VideoSection />

                  <div></div>
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
