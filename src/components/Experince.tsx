"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Experince() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-10 text-white">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* Left: Text Animate from Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full max-w-2xl mx-auto"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold underline underline-offset-8 tracking-tight text-gray-100 mb-4 sm:mb-6">
                Professional Experience
              </h1>

              <div className="space-y-4 sm:space-y-6 text-gray-100 text-xs sm:text-base md:text-lg leading-relaxed grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Experience Items */}
                <div>
                  <span className="font-bold text-base sm:text-lg">FLOATY</span>
                  <br />
                  <span className="italic text-xs sm:text-base">
                    Lead Game Developer | Lead Programmer | Software Architect
                  </span>
                  <br />
                  <span className="text-xs sm:text-sm">
                    March 2024 - Present (1 year 5 months) — Riyadh, Saudi
                    Arabia
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg">
                    Katana Games
                  </span>
                  <br />
                  <span className="italic text-xs sm:text-base">
                    Lead Game Programmer | Delivery Manager
                  </span>
                  <br />
                  <span className="text-xs sm:text-sm">
                    February 2023 - Present (2 years 6 months) — Lahore
                    District, Pakistan
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg">
                    IP Engineering Pro
                  </span>
                  <br />
                  <span className="italic text-xs sm:text-base">
                    Lead Game Developer | Game Dev Consultant | Delivery Manager
                  </span>
                  <br />
                  <span className="text-xs sm:text-sm">
                    June 2023 - Feb 2024 — Lebanon
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg">
                    Revolving Games, Inc.
                  </span>
                  <br />
                  <span className="italic text-xs sm:text-base">
                    Senior Game Developer
                  </span>
                  <br />
                  <span className="text-xs sm:text-sm">
                    July 2022 - June 2023 — San Francisco, California
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg">
                    Playly Studios
                  </span>
                  <br />
                  <span className="italic text-xs sm:text-base">
                    Software Engineer
                  </span>
                  <br />
                  <span className="text-xs sm:text-sm">
                    Oct 2021 - May 2022 — Norway
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg">
                    GenITeam Solutions
                  </span>
                  <br />
                  <span className="italic text-xs sm:text-base">
                    Senior Game Developer
                  </span>
                  <br />
                  <span className="text-xs sm:text-sm">
                    2017 - 2022 — Lahore, Pakistan
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg">
                    Freelance Game Developer
                  </span>
                  <ul className="list-disc ml-6 mt-1">
                    <li className="text-xs sm:text-sm md:text-base">
                      Worked with PC, mobile, AR/VR, and WebGL projects, helping
                      startups and studios build high-performance games.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right: Image Animate from Right + Continuous Bounce */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="rounded-md flex justify-center w-full"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="w-full flex justify-center"
              >
                <Image
                  src="/pe.jpg"
                  alt="Professional Experience"
                  width={400}
                  height={400}
                  className="rounded-md shadow-xl shadow-gray-500/20 hover:shadow-purple-500/40 transition-all w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Experince;
