"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectLayoutProps = {
  image: string;
  title: string;
  description: string;
  direction: string;
};

function ProjectLayout({
  image,
  title,
  description,
  direction,
}: ProjectLayoutProps) {
  const isLeft = direction === "left";

  return (
    <motion.div
      initial={{ x: isLeft ? -80 : 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="rounded-xl overflow-hidden shadow-lg transition-colors duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
    >
      <div className="p-2 sm:p-4 flex flex-col h-full">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] mb-2 sm:mb-3 overflow-hidden rounded-md group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-1 group-hover:text-white text-indigo-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-indigo-300 group-hover:text-white min-h-[3rem] sm:min-h-[4rem] line-clamp-1 overflow-hidden">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectLayout;
