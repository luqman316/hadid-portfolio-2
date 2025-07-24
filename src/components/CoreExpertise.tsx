"use client";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaCode,
  FaGamepad,
  FaNetworkWired,
  FaPuzzlePiece,
  FaUsers,
} from "react-icons/fa";

const highlights = [
  {
    title: "Game Architecture & Scalability",
    description: "Built frameworks powering successful games for years.",
    icon: <FaGamepad className="text-3xl text-indigo-600" />,
  },
  {
    title: "Game Optimization & Performance",
    description: "Ensured smooth gameplay, even on low-tier devices.",
    icon: <FaBolt className="text-3xl text-yellow-500" />,
  },
  {
    title: "Multiplayer Game Development",
    description: "Expertise in Photon PUN2, Mirror, and Netcode.",
    icon: <FaNetworkWired className="text-3xl text-blue-500" />,
  },
  {
    title: "Plugin & SDK Integration",
    description: "Troubleshooting and optimizing third-party tools.",
    icon: <FaPuzzlePiece className="text-3xl text-pink-500" />,
  },
  {
    title: "Code Quality & Best Practices",
    description: "Established boilerplates and coding guidelines.",
    icon: <FaCode className="text-3xl text-green-500" />,
  },
  {
    title: "Leadership & Team Management",
    description: "Led teams of 5 to 20 developers, driving decisions.",
    icon: <FaUsers className="text-3xl text-red-500" />,
  },
];

function CoreExpertise() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* core expertise */}
            <div className="flex flex-col justify-center w-full max-w-2xl space-y-1 mx-auto md:mx-0">
              <h1 className="text-3xl sm:text-4xl mb-1 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
                Core Expertise
              </h1>
              <div className="grid gap-1 sm:gap-1 grid-cols-1 sm:grid-cols-2 mt-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-1 sm:p-1 rounded-2xl hover:cursor-pointer group w-full"
                  >
                    <div className="mb-1 flex items-center justify-center">
                      <span className="bg-white/10 rounded-full animate-pulse hover:animate-none p-3 group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 text-indigo-300 group-hover:text-indigo-400 text-center">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            {/* second */}
            {/* <div className="flex flex-col justify-center items-center w-full animate-pulse">
              <Image
                src="/core-12-bg.png"
                alt="Background Hadid"
                width={300}
                height={300}
                className="rounded-md bg-blend-multiply bg-transparent  mx-auto"
                priority
              />
              <h1>Core</h1>
              <p>expertise</p>
            </div> */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-center items-center w-full space-y-2 p-4"
            >
              {/* Core */}
              <motion.h1
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  transition: { duration: 0.2 },
                }}
                className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 drop-shadow-md hover:drop-shadow-2xl transition-all duration-300"
              >
                Core
              </motion.h1>

              {/* Expertise */}
              <motion.p
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
                className="text-xl md:text-2xl font-semibold text-gray-700 hover:text-rose-600 transition-all duration-300 tracking-wider uppercase"
              >
                expertise
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoreExpertise;
