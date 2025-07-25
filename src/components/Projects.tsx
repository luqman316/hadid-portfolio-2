// "use client";
// import { motion } from "framer-motion";
// import ProjectLayout from "./ProjectLayout";
// function Projects() {
//   return (
//     <>
//       <motion.div
//         initial={{ rotate: -5, opacity: 0 }}
//         animate={{ rotate: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: "easeIn" }}
//       >
//         <div>
//           <div className="container mx-auto px-4 py-8 text-white">
//             <h1 className="text-4xl font-bold">Projects</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
//               {/* <div className="col-span-1 md:col-span-2 lg:col-span-4">
//               <h1 className="text-3xl sm:text-4xl font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
//                 Projects
//               </h1>
//             </div> */}
//               <ProjectLayout
//                 image="/game1/img1.jpg"
//                 title="Azure Dungeon Surviror"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//               <ProjectLayout
//                 image="/game2/img1.jpg"
//                 title="Educational Game"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//               <ProjectLayout
//                 image="/game3/img1.jpg"
//                 title="TripleHandPoker-Multiplayer-CardsGame"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//               <ProjectLayout
//                 image="/game4/img1.jpg"
//                 title="Ninja Hero Shadow Warrior"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//               <ProjectLayout
//                 image="/game5/img1.jpg"
//                 title="SkyBorne Legacy - MMORPG - Mutliplayer"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//               <ProjectLayout
//                 image="/game6/img1.jpg"
//                 title="Funny Shooter Bro"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//               <ProjectLayout
//                 image="/game7/img1.jpg"
//                 title="CyAnimation-Beatemup-Royale"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//               <ProjectLayout
//                 image="/game8/img1.jpg"
//                 title="Satan's Revival"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// }

// export default Projects;

// "use client";
// import { motion } from "framer-motion";
// import ProjectLayout from "./ProjectLayout";

// const projects = [
//   {
//     image: "/game1/img1.jpg",
//     title: "Azure Dungeon Surviror",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
//   {
//     image: "/game2/img1.jpg",
//     title: "Educational Game",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
//   {
//     image: "/game3/img1.jpg",
//     title: "TripleHandPoker-Multiplayer-CardsGame",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
//   {
//     image: "/game4/img1.jpg",
//     title: "Ninja Hero Shadow Warrior",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
//   {
//     image: "/game5/img1.jpg",
//     title: "SkyBorne Legacy - MMORPG - Mutliplayer",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
//   {
//     image: "/game6/img1.jpg",
//     title: "Funny Shooter Bro",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
//   {
//     image: "/game7/img1.jpg",
//     title: "CyAnimation-Beatemup-Royale",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
//   {
//     image: "/game8/img1.jpg",
//     title: "Satan's Revival",
//     desc: "Lorem ipsum dolor sit amet...",
//   },
// ];
// function Projects() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="container mx-auto px-4 py-8 text-white"
//     >
//       <h1 className="text-4xl font-bold">Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
//         {projects.map((project, index) => (
//           <ProjectLayout
//             key={index}
//             image={project.image}
//             title={project.title}
//             description={project.desc}
//             direction={index % 2 === 0 ? "left" : "right"}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default Projects;



"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const projects = [
  { image: "/game1/img1.jpg", title: "Azure Dungeon Surviror", desc: "Lorem ipsum dolor sit amet..." },
  { image: "/game2/img1.jpg", title: "Educational Game", desc: "Lorem ipsum dolor sit amet..." },
  { image: "/game3/img1.jpg", title: "TripleHandPoker-Multiplayer-CardsGame", desc: "Lorem ipsum dolor sit amet..." },
  { image: "/game4/img1.jpg", title: "Ninja Hero Shadow Warrior", desc: "Lorem ipsum dolor sit amet..." },
  { image: "/game5/img1.jpg", title: "SkyBorne Legacy - MMORPG - Mutliplayer", desc: "Lorem ipsum dolor sit amet..." },
  { image: "/game6/img1.jpg", title: "Funny Shooter Bro", desc: "Lorem ipsum dolor sit amet..." },
  { image: "/game7/img1.jpg", title: "CyAnimation-Beatemup-Royale", desc: "Lorem ipsum dolor sit amet..." },
  { image: "/game8/img1.jpg", title: "Satan's Revival", desc: "Lorem ipsum dolor sit amet..." },
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 text-white"
    >
      <h1 className="text-4xl font-bold text-center sm:text-left">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
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
