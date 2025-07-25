"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const projects = [
  {
    image: "/game1/img1.jpg",
    title: "Azure Dungeon Surviror",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/game2/img1.jpg",
    title: "Educational Game",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/game3/img1.jpg",
    title: "TripleHandPoker-Multiplayer-CardsGame",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/game4/img1.jpg",
    title: "Ninja Hero Shadow Warrior",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/game5/img1.jpg",
    title: "SkyBorne Legacy - MMORPG - Mutliplayer",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/game6/img1.jpg",
    title: "Funny Shooter Bro",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/game7/img1.jpg",
    title: "CyAnimation-Beatemup-Royale",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    image: "/game8/img1.jpg",
    title: "Satan's Revival",
    desc: "Lorem ipsum dolor sit amet...",
  },
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-2 sm:px-4 py-6 sm:py-8 text-white"
    >
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
        Projects
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8">
        {projects.map((project, index) => (
          <ProjectLayout
            key={index}
            image={project.image}
            title={project.title}
            description={project.desc}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
