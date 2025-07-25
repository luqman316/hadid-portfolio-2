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

function About2() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center py-4 px-2 sm:px-0">
        <div className="container mx-auto max-w-4xl px-2 sm:px-4 py-6 sm:py-8">
          <div className="bg-gradient-to-r from-gray-800 to-gray-500 p-2 sm:p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-3 gap-2 sm:gap-4">
              {/* Summary: Top Right */}
              <div className="row-start-1 col-start-1 md:row-start-1 md:col-start-2 flex flex-col justify-center mt-0 md:mt-0">
                <div className="w-full max-w-2xl mx-auto md:mx-0 p-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold underline underline-offset-8 mb-1 ">
                    Summary
                  </h1>
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-black mb-1 mt-1">
                    Senior Game Developer | AI Enthusiast | Team Leader
                  </h2>
                  <p className="text-xs sm:text-sm md:text-lg font-bold mb-1 text-indigo-300 group-hover:text-indigo-400 text-balance mt-1 transition-colors duration-200">
                    With 7+ years of experience in Unity3D and C#, I specialize
                    in game programming, scalable architectures, and performance
                    optimization. I’ve worked across mobile, PC, and multiplayer
                    game development, building long-lasting, maintainable,
                    high-performance codebases.
                  </p>
                </div>
              </div>
              {/* Core Expertise: Center Left */}
              <div className="row-start-2 col-start-1 md:row-start-2 md:col-start-1 flex flex-col justify-center">
                <div className="p-1 w-full max-w-2xl space-y-1 mx-auto md:mx-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
                    Core Expertise
                  </h1>
                  <div className="grid gap-2 sm:gap-3 grid-cols-1 xs:grid-cols-2">
                    {highlights.map((item, index) => (
                      <div
                        key={index}
                        className="p-1 sm:p-2 rounded-2xl hover:cursor-pointer group w-full"
                      >
                        <div className="mb-1 flex items-center justify-center">
                          <span className="bg-white/10 rounded-full p-2 sm:p-3 group-hover:scale-110 transition-transform duration-200">
                            {item.icon}
                          </span>
                        </div>
                        <h3 className="text-xs sm:text-base md:text-lg font-bold mb-1 text-indigo-300 group-hover:text-indigo-400 text-center">
                          {item.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Professional Experience: Bottom Right */}
              <div className="row-start-3 col-start-1 md:row-start-3 md:col-start-2 flex flex-col justify-center">
                <div className="p-1 w-full max-w-2xl mt-0 mx-auto md:mx-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1 font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
                    Professional Experience
                  </h1>
                  <div className="space-y-2 text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed">
                    {/* ...existing experience content... */}
                    <div>
                      <span className="font-bold text-lg">FLOATY</span>
                      <br />
                      <span className="italic">
                        Lead Game Developer | Lead Programmer | Software
                        Architect
                      </span>
                      <br />
                      <span className="text-sm">
                        March 2024 - Present (1 year 5 months) — Riyadh, Saudi
                        Arabia
                      </span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          Leading a full scale mobile and PC product at Floaty;
                          roles involve building a detailed, quality
                          pirates-based Gacha Game.
                        </li>
                        <li>
                          Plan development sprints with Producer, Game Designers
                          and technically assess deliverables.
                        </li>
                        <li>
                          Regular code and PR Reviews to ensure stable and
                          scalable codebase.
                        </li>
                        <li>
                          Planning feature development with team to ensure
                          development convention and architecture is followed.
                        </li>
                        <li>
                          Actively programming on different components, features
                          and toolsets for the team.
                        </li>
                        <li>
                          Bi-weekly meetings with technical mentors and
                          stakeholders to explain project state, technical
                          landscape and upcoming deliverables.
                        </li>
                        <li>
                          Art-tools development and art delivery pipelines.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-lg">Katana Games</span>
                      <br />
                      <span className="italic">
                        Lead Game Programmer | Delivery Manager
                      </span>
                      <br />
                      <span className="text-sm">
                        February 2023 - Present (2 years 6 months) — Lahore
                        District, Punjab, Pakistan
                      </span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          Actively reviewing code and pull requests across
                          multiple projects to ensure company&apos;s stated
                          architecture is followed across all projects.
                        </li>
                        <li>
                          Setup reusable components, boilerplates and
                          architectures for the development team.
                        </li>
                        <li>
                          Client Side Developer (Unity3d, C#, GIT, JIRA) as
                          solo-dev or lead on singleplayer and multiplayer games
                          as per requirement.
                        </li>
                        <li>
                          Analyze, break down and plan requirement documents and
                          lay out development plans with costs and timeline.
                        </li>
                        <li>
                          Setup project architectures, code reviews and peer
                          programming sessions with team.
                        </li>
                        <li>
                          Ensure client success by being involved in feature
                          discussion calls, delivery calls, pre-sales, and sales
                          closing.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-lg">
                        IP Engineering Pro
                      </span>
                      <br />
                      <span className="italic">
                        Lead Game Developer | Game Dev Consultant | Delivery
                        Manager
                      </span>
                      <br />
                      <span className="text-sm">
                        June 2023 - February 2024 (9 months) — Lebanon
                      </span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          Domain understanding of pre-existing architecture,
                          de-coupled codebase, fixed game-breaking issues and
                          ensured the project runs on target devices.
                        </li>
                        <li>
                          Added game features to the project, ensuring a
                          scalable codebase and meeting client deadlines.
                        </li>
                        <li>
                          Developed children educational game that helps kids
                          learn important things like child behavior, math, and
                          solving problems.
                        </li>
                        <li>
                          Implemented user feedback to improve gameplay
                          mechanics and overall player satisfaction.
                        </li>
                        <li>
                          Setup project pipeline for junior and remote teams.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-lg">
                        Revolving Games, Inc.
                      </span>
                      <br />
                      <span className="italic">Senior Game Developer</span>
                      <br />
                      <span className="text-sm">
                        July 2022 - June 2023 (1 year) — San Francisco,
                        California, United States
                      </span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>Client Side Developer (Unity3d, C#, GIT, JIRA).</li>
                        <li>
                          Worked on PC based MMO RPG (Unity3D and C#) Skyborne
                          Legacy.
                        </li>
                        <li>
                          Worked with MVC and SOLID principles on the project to
                          keep it clean and fully maintainable.
                        </li>
                        <li>
                          Worked on debugging rendering and performance related
                          issues.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-lg">Playly Studios</span>
                      <br />
                      <span className="italic">Software Engineer</span>
                      <br />
                      <span className="text-sm">
                        October 2021 - May 2022 (8 months) — Norway
                      </span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          Worked remotely as a Software Engineer on a
                          Multiplayer Offroad Game.
                        </li>
                        <li>
                          Worked on backlog tasks, including multiplayer
                          Photon-based fixes, adding custom components in
                          vehicles (AWD, gear shift behaviours, camera
                          features).
                        </li>
                        <li>
                          Worked on fixing multiplayer syncing bugs, gameplay
                          and control bugs.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-lg">
                        GenITeam Solutions
                      </span>
                      <br />
                      <span className="italic">Senior Game Developer</span>
                      <br />
                      <span className="text-sm">
                        2017 - 2022 (5 years) — Lahore District, Punjab,
                        Pakistan
                      </span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          Worked as Technical Lead and architect on their
                          flagship Scary Teacher Project, designed and
                          implemented their codeless content generation system
                          which is still running well maintained after years of
                          development.
                        </li>
                        <li>
                          Worked as a Lead Multiplayer Client Programmer and
                          Developer to create their first multiplayer product
                          stream and set the development pipeline and production
                          rules.
                        </li>
                        <li>
                          Headed the Technical team to introduce various
                          development pipelines and set rules of development.
                        </li>
                        <li>
                          Game architecture setup and boilerplate maintenance.
                        </li>
                        <li>Gameplay programming.</li>
                        <li>
                          Optimized game performance and project stability
                          issues.
                        </li>
                        <li>
                          Legacy codebase updates, boilerplate maintenance
                          (refactoring and architecture).
                        </li>
                        <li>
                          Documentation and process setup for various tools &
                          technologies.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-lg">
                        Freelance Game Developer (6+ Years)
                      </span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          Worked with PC, mobile, AR/VR, and WebGL projects,
                          helping startups and studios build high-performance,
                          scalable games.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-lg">What’s Next</span>
                      <ul className="list-disc ml-6 mt-1">
                        <li>
                          Currently exploring AI development, aiming to
                          integrate cutting-edge AI technologies into gaming.
                        </li>
                        <li>
                          Let’s connect and discuss game development, AI, and
                          the future of interactive experiences.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About2;

// bg-gradient-to-r from-gray-800 to-gray-400 container mx-auto px-4 py-8
// bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:bg-zinc-900 *
