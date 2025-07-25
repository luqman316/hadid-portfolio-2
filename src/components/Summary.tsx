// "use client";
// import { AnimatePresence, motion } from "framer-motion";

// const containerVariants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
//   exit: { opacity: 0 },
// };

// const leftVariants = {
//   initial: { opacity: 0, x: -100 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -100 },
// };

// const rightVariants = {
//   initial: { opacity: 0, x: 50 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: 50 },
// };

// function Summary() {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         className=""
//         variants={containerVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         key="summary-page"
//       >
//         <div className="container mx-auto px-4 py-5 text-white">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//             {/* Left: Summary */}
//             <motion.div
//               className="w-full"
//               variants={leftVariants}
//               transition={{ duration: 1, ease: "easeInOut" }}
//             >
//               <h1 className="text-3xl sm:text-4xl font-extrabold underline underline-offset-8 mb-3">
//                 About Me
//               </h1>
//               <h2 className="text-base sm:text-lg font-medium text-white mb-2">
//                 Senior Game Developer | AI Enthusiast | Team Leader
//               </h2>
//               <p className="text-sm sm:text-lg text-gray-400 hover:text-white transition-colors duration-200">
//                 With 7+ years of experience in Unity3D and C#, I specialize in
//                 game programming, scalable architectures, and performance
//                 optimization. I’ve worked across mobile, PC, and multiplayer
//                 game development, building long-lasting, maintainable,
//                 high-performance codebases.
//               </p>
//             </motion.div>

//             {/* Right: Image or Video */}
//             {/* <div></div> */}
//             <motion.div
//               className="fw-full max-w-md mx-auto"
//               variants={rightVariants}
//               transition={{ duration: 1, ease: "easeInOut" }}
//             >
//               <video
//                 preload="none"
//                 autoPlay
//                 muted
//                 loop
//                 className="w-full h-auto object-cover rounded-lg shadow-2xl"
//                 src="/ab1.mp4"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Summary;



"use client";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0 },
};

const leftVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const rightVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

function Summary() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key="summary-page"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Summary */}
            <motion.div
              className="w-full"
              variants={leftVariants}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold underline underline-offset-8 mb-4">
                About Me
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-white mb-3">
                Senior Game Developer | AI Enthusiast | Team Leader
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-white transition-colors duration-200">
                With 7+ years of experience in Unity3D and C#, I specialize in game programming, scalable architectures, and performance optimization. I’ve worked across mobile, PC, and multiplayer game development, building long-lasting, maintainable, high-performance codebases.
              </p>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              className="w-full max-w-xl mx-auto"
              variants={rightVariants}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                <video
                  preload="none"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  src="/ab1.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Summary;
