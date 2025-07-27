"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBolt,
  FaCode,
  FaGamepad,
  FaNetworkWired,
  FaPuzzlePiece,
  FaUnity,
} from "react-icons/fa";
import { SiUnrealengine, SiVirtualbox } from "react-icons/si";

const highlights = [
  {
    title: "Unity Game Development",
    description: "Built frameworks powering successful games for years.",
    icon: (
      <FaUnity className="text-2xl sm:text-3xl lg:text-4xl text-gray-950" />
    ),
  },
  {
    title: "Unreal Engine Development",
    description: "Built frameworks powering successful games for years.",
    icon: (
      <SiUnrealengine className="text-2xl sm:text-3xl lg:text-4xl text-slate-100" />
    ),
  },
  {
    title: "AR/VR Development",
    description: "Established boilerplates and coding guidelines.",
    icon: (
      <SiVirtualbox className="text-2xl sm:text-3xl lg:text-4xl text-blue-500" />
    ),
  },

  {
    title: "Plugin & SDK Integration",
    description: "Troubleshooting and optimizing third-party tools.",
    icon: (
      <FaPuzzlePiece className="text-2xl sm:text-3xl lg:text-4xl text-pink-500" />
    ),
  },
  {
    title: "Code Quality & Best Practices",
    description: "Established boilerplates and coding guidelines.",
    icon: (
      <FaCode className="text-2xl sm:text-3xl lg:text-4xl text-green-500" />
    ),
  },
  {
    title: "Multiplayer Game Development",
    description: "Expertise in Photon PUN2, Mirror, and Netcode.",
    icon: (
      <FaNetworkWired className="text-2xl sm:text-3xl lg:text-4xl text-blue-500" />
    ),
  },
  {
    title: "Game Architecture & Scalability",
    description: "Built frameworks powering successful games for years.",
    icon: (
      <FaGamepad className="text-2xl sm:text-3xl lg:text-4xl text-indigo-600" />
    ),
  },
  {
    title: "Game Optimization & Performance",
    description: "Ensured smooth gameplay, even on low-tier devices.",
    icon: (
      <FaBolt className="text-2xl sm:text-3xl lg:text-4xl text-yellow-500" />
    ),
  },
  // {
  //   title: "Leadership & Team Management",
  //   description: "Led teams of 5 to 20 developers, driving decisions.",
  //   icon: <FaUsers className="text-2xl sm:text-3xl lg:text-4xl text-red-500" />,
  // },
];

function CoreExpertise() {
  return (
    <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-12 text-white overflow-x-hidden">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 xl:gap-16 items-center">
        {/* Left: Text / Cards */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center w-full max-w-2xl mx-auto md:mx-0"
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
            Core Expertise
          </h1>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3 md:gap-6 mt-4 sm:mt-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="p-2 sm:p-3 rounded-2xl  group hover:bg-white/10 transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <div className="mb-2 flex items-center justify-center">
                  <span className="bg-white/10 rounded-full p-2 sm:p-3 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-indigo-300 group-hover:text-indigo-400 text-center">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Floating Words */}
        {/* <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center w-full space-y-2 p-2 sm:p-4 max-w-xs sm:max-w-sm md:max-w-full mx-auto"
        >
          <motion.h1
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: -2,
              transition: { duration: 0.2 },
            }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 drop-shadow-md hover:drop-shadow-2xl transition-all duration-300"
          ></motion.h1>

          <motion.p
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              transition: { duration: 0.2 },
            }}
            className="text-base sm:text-xl md:text-2xl font-semibold text-gray-300 hover:text-rose-500 transition-all duration-300 tracking-wider uppercase"
          >
            expertise
          </motion.p>
        </motion.div> */}
        
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
                          src="/ce.jpg"
                          alt="Professional Experience"
                          width={400}
                          height={400}
                          className="rounded-md shadow-xl shadow-gray-500/20 hover:shadow-purple-500/40 transition-all w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        />
                      </motion.div>
                    </motion.div>
      </div>
    </div>
  );
}

export default CoreExpertise;
