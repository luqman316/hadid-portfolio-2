// "use client";
// import { motion } from "framer-motion";
// import {
//   FaBolt,
//   FaCode,
//   FaGamepad,
//   FaNetworkWired,
//   FaPuzzlePiece,
//   FaUsers,
// } from "react-icons/fa";

// const highlights = [
//   {
//     title: "Game Architecture & Scalability",
//     description: "Built frameworks powering successful games for years.",
//     icon: <FaGamepad className="text-3xl text-indigo-600" />,
//   },
//   {
//     title: "Game Optimization & Performance",
//     description: "Ensured smooth gameplay, even on low-tier devices.",
//     icon: <FaBolt className="text-3xl text-yellow-500" />,
//   },
//   {
//     title: "Multiplayer Game Development",
//     description: "Expertise in Photon PUN2, Mirror, and Netcode.",
//     icon: <FaNetworkWired className="text-3xl text-blue-500" />,
//   },
//   {
//     title: "Plugin & SDK Integration",
//     description: "Troubleshooting and optimizing third-party tools.",
//     icon: <FaPuzzlePiece className="text-3xl text-pink-500" />,
//   },
//   {
//     title: "Code Quality & Best Practices",
//     description: "Established boilerplates and coding guidelines.",
//     icon: <FaCode className="text-3xl text-green-500" />,
//   },
//   {
//     title: "Leadership & Team Management",
//     description: "Led teams of 5 to 20 developers, driving decisions.",
//     icon: <FaUsers className="text-3xl text-red-500" />,
//   },
// ];

// function CoreExpertise() {
//   return (
//     <>
//       <div>
//         <div className="container mx-auto px-4 py-8 text-white">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
//             {/* core expertise */}
//             <div className="flex flex-col justify-center w-full max-w-2xl space-y-1 mx-auto md:mx-0">
//               <h1 className="text-3xl sm:text-4xl mb-1 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
//                 Core Expertise
//               </h1>
//               <div className="grid gap-1 sm:gap-1 grid-cols-1 sm:grid-cols-2 mt-4">
//                 {highlights.map((item, index) => (
//                   <div
//                     key={index}
//                     className="p-1 sm:p-1 rounded-2xl hover:cursor-pointer group w-full"
//                   >
//                     <div className="mb-1 flex items-center justify-center">
//                       <span className="bg-white/10 rounded-full animate-pulse hover:animate-none p-3 group-hover:scale-110 transition-transform duration-200">
//                         {item.icon}
//                       </span>
//                     </div>
//                     <h3 className="text-base sm:text-lg font-bold mb-1 text-indigo-300 group-hover:text-indigo-400 text-center">
//                       {item.title}
//                     </h3>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="flex flex-col justify-center items-center w-full space-y-2 p-4"
//             >
//               {/* Core */}
//               <motion.h1
//                 animate={{ y: [0, -12, 0] }}
//                 transition={{
//                   duration: 0.4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: -2,
//                   transition: { duration: 0.2 },
//                 }}
//                 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 drop-shadow-md hover:drop-shadow-2xl transition-all duration-300"
//               >
//                 Core
//               </motion.h1>

//               {/* Expertise */}
//               <motion.p
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 2,
//                   transition: { duration: 0.2 },
//                 }}
//                 className="text-xl md:text-2xl font-semibold text-gray-700 hover:text-rose-600 transition-all duration-300 tracking-wider uppercase"
//               >
//                 expertise
//               </motion.p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CoreExpertise;

// "use client";
// import { motion } from "framer-motion";
// import {
//   FaBolt,
//   FaCode,
//   FaGamepad,
//   FaNetworkWired,
//   FaPuzzlePiece,
//   FaUsers,
// } from "react-icons/fa";

// const highlights = [
//   {
//     title: "Game Architecture & Scalability",
//     description: "Built frameworks powering successful games for years.",
//     icon: <FaGamepad className="text-3xl text-indigo-600" />,
//   },
//   {
//     title: "Game Optimization & Performance",
//     description: "Ensured smooth gameplay, even on low-tier devices.",
//     icon: <FaBolt className="text-3xl text-yellow-500" />,
//   },
//   {
//     title: "Multiplayer Game Development",
//     description: "Expertise in Photon PUN2, Mirror, and Netcode.",
//     icon: <FaNetworkWired className="text-3xl text-blue-500" />,
//   },
//   {
//     title: "Plugin & SDK Integration",
//     description: "Troubleshooting and optimizing third-party tools.",
//     icon: <FaPuzzlePiece className="text-3xl text-pink-500" />,
//   },
//   {
//     title: "Code Quality & Best Practices",
//     description: "Established boilerplates and coding guidelines.",
//     icon: <FaCode className="text-3xl text-green-500" />,
//   },
//   {
//     title: "Leadership & Team Management",
//     description: "Led teams of 5 to 20 developers, driving decisions.",
//     icon: <FaUsers className="text-3xl text-red-500" />,
//   },
// ];

// function CoreExpertise() {
//   return (
//     <div className="container mx-auto px-4 py-12 text-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left: Text Section Animation */}
//         <motion.div
//           initial={{ x: -80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="flex flex-col justify-center w-full max-w-2xl mx-auto md:mx-0"
//         >
//           <h1 className="text-3xl sm:text-4xl mb-1 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
//             Core Expertise
//           </h1>

//           <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 mt-6">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.4,
//                   delay: index * 0.1,
//                   ease: "easeOut",
//                 }}
//                 className="p-3 rounded-2xl group hover:bg-white/10 transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
//               >
//                 <div className="mb-2 flex items-center justify-center">
//                   <span className="bg-white/10 rounded-full p-1  group-hover:scale-110 transition-transform duration-200">
//                     {item.icon}
//                   </span>
//                 </div>
//                 <h3 className="text-base sm:text-lg font-bold text-indigo-300 group-hover:text-indigo-400 text-center">
//                   {item.title}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right: Floating Words */}
//         <motion.div
//           initial={{ x: 80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="flex flex-col justify-center items-center w-full space-y-2 p-4"
//         >
//           <motion.h1
//             animate={{ y: [0, -15, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             whileHover={{
//               scale: 1.1,
//               rotate: -2,
//               transition: { duration: 0.2 },
//             }}
//             className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 drop-shadow-md hover:drop-shadow-2xl transition-all duration-300"
//           >
//             Core
//           </motion.h1>

//           <motion.p
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             whileHover={{
//               scale: 1.1,
//               rotate: 2,
//               transition: { duration: 0.2 },
//             }}
//             className="text-xl md:text-2xl font-semibold text-gray-700 hover:text-rose-600 transition-all duration-300 tracking-wider uppercase"
//           >
//             expertise
//           </motion.p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default CoreExpertise;



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
    icon: <FaGamepad className="text-2xl sm:text-3xl lg:text-4xl text-indigo-600" />,
  },
  {
    title: "Game Optimization & Performance",
    description: "Ensured smooth gameplay, even on low-tier devices.",
    icon: <FaBolt className="text-2xl sm:text-3xl lg:text-4xl text-yellow-500" />,
  },
  {
    title: "Multiplayer Game Development",
    description: "Expertise in Photon PUN2, Mirror, and Netcode.",
    icon: <FaNetworkWired className="text-2xl sm:text-3xl lg:text-4xl text-blue-500" />,
  },
  {
    title: "Plugin & SDK Integration",
    description: "Troubleshooting and optimizing third-party tools.",
    icon: <FaPuzzlePiece className="text-2xl sm:text-3xl lg:text-4xl text-pink-500" />,
  },
  {
    title: "Code Quality & Best Practices",
    description: "Established boilerplates and coding guidelines.",
    icon: <FaCode className="text-2xl sm:text-3xl lg:text-4xl text-green-500" />,
  },
  {
    title: "Leadership & Team Management",
    description: "Led teams of 5 to 20 developers, driving decisions.",
    icon: <FaUsers className="text-2xl sm:text-3xl lg:text-4xl text-red-500" />,
  },
];

function CoreExpertise() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
        {/* Left: Text / Cards */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center w-full max-w-2xl mx-auto md:mx-0"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
            Core Expertise
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6">
          {/* Cards */}
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
                className="p-3 sm:p-4 rounded-2xl group hover:bg-white/10 transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <div className="mb-2 flex items-center justify-center">
                  <span className="bg-white/10 rounded-full p-3 sm:p-4 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-indigo-300 group-hover:text-indigo-400 text-center">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Floating Words */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center w-full space-y-2 p-2 sm:p-4 max-w-sm md:max-w-full mx-auto"
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
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 drop-shadow-md hover:drop-shadow-2xl transition-all duration-300"
          >
            Core
          </motion.h1>

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
            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 hover:text-rose-500 transition-all duration-300 tracking-wider uppercase"
          >
            expertise
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default CoreExpertise;
