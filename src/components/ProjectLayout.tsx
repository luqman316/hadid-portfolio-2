"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectLayoutProps = {
  image: string;
  title: string;
  description: string;
  direction: string;
};

function ProjectLayout({ image, title, description, direction }: ProjectLayoutProps) {
  const isLeft = direction === "left";

  return (
    <motion.div
      initial={{ x: isLeft ? -80 : 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="rounded-xl overflow-hidden shadow-lg  transition-colors duration-300"
    >
      <div className="p-4 flex flex-col h-full">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] mb-3 overflow-hidden rounded-md group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
            // sizes="(max-width: 768px) 100vw, 33vw"
            
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-1 group-hover:text-white text-indigo-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-indigo-300 group-hover:text-white text-sm min-h-[4rem]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectLayout;
