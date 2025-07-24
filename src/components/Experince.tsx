"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function Experince() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Experience Content */}
          <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold underline underline-offset-8 tracking-tight text-gray-100 mb-6">
              Professional Experience
            </h1>
            <div className="space-y-6 text-gray-100 text-sm sm:text-base leading-relaxed grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Experience Items */}
              <div>
                <span className="font-bold text-lg">FLOATY</span>
                <br />
                <span className="italic">
                  Lead Game Developer | Lead Programmer | Software Architect
                </span>
                <br />
                <span className="text-sm">
                  March 2024 - Present (1 year 5 months) — Riyadh, Saudi Arabia
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">Katana Games</span>
                <br />
                <span className="italic">
                  Lead Game Programmer | Delivery Manager
                </span>
                <br />
                <span className="text-sm">
                  February 2023 - Present (2 years 6 months) — Lahore District,
                  Punjab, Pakistan
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">IP Engineering Pro</span>
                <br />
                <span className="italic">
                  Lead Game Developer | Game Dev Consultant | Delivery Manager
                </span>
                <br />
                <span className="text-sm">
                  June 2023 - February 2024 (9 months) — Lebanon
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">Revolving Games, Inc.</span>
                <br />
                <span className="italic">Senior Game Developer</span>
                <br />
                <span className="text-sm">
                  July 2022 - June 2023 (1 year) — San Francisco, California,
                  United States
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">Playly Studios</span>
                <br />
                <span className="italic">Software Engineer</span>
                <br />
                <span className="text-sm">
                  October 2021 - May 2022 (8 months) — Norway
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">GenITeam Solutions</span>
                <br />
                <span className="italic">Senior Game Developer</span>
                <br />
                <span className="text-sm">
                  2017 - 2022 (5 years) — Lahore District, Punjab, Pakistan
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">
                  Freelance Game Developer (6+ Years)
                </span>
                <ul className="list-disc ml-6 mt-1">
                  <li>
                    Worked with PC, mobile, AR/VR, and WebGL projects, helping
                    startups and studios build high-performance, scalable games.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          {/* <div className="flex justify-center">
            <Image
              src="/pe.jpg"
              alt="Professional Experience"
              width={500}
              height={500}
              className="rounded-md bg-blend-multiply bg-transparent"
            />
          </div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              y: [0, -10, 0], // bounce up and down
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="rounded-md flex justify-center"
          >
            <Image
              src="/pe.jpg"
              alt="Professional Experience"
              width={600}
              height={600}
              className="rounded-md bg-blend-multiply bg-transparent"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experince;
