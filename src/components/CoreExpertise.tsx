import Image from "next/image";
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
                      <span className="bg-white/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-200">
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
            <div className="flex flex-col justify-center items-center w-full animate-pulse">
              <Image
                src="/core-12-bg.png"
                alt="Background Hadid"
                width={300}
                height={300}
                className="rounded-md bg-blend-multiply bg-transparent  mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoreExpertise;
