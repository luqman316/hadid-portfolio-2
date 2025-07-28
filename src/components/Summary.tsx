"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  // Responsive video/image fallback
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key="summary-page"
      >
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-10 text-white">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Left: Summary */}
            <motion.div
              className="w-full"
              variants={leftVariants}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold underline underline-offset-8 mb-3 sm:mb-4">
                About Me
              </h1>
              <h2 className="text-sm sm:text-lg md:text-xl font-medium text-white mb-2 sm:mb-3">
                Senior Game Developer | AI Enthusiast | Team Leader
              </h2>
              <p className="text-xs sm:text-base sm:text-white md:text-lg text-gray-400 hover:text-white transition-colors duration-200">
                With 7+ years of experience in Unity3D and C#, I specialize in
                game programming, scalable architectures, and performance
                optimization. I’ve worked across mobile, PC, and multiplayer
                game development, building long-lasting, maintainable,
                high-performance codebases.
              </p>
            </motion.div>

            {/* Right: Video or Image fallback */}
            <motion.div
              className="w-full max-w-xl mx-auto"
              variants={rightVariants}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl flex items-center justify-center bg-black/30">
                {isMobile ? (
                  <Image
                    src="/about4.jpg"
                    alt="About Me"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <video
                    preload="none"
                    autoPlay
                    muted
                    // controls
                    loop
                    className="w-full h-full object-cover"
                    src="/ab1.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Summary;
