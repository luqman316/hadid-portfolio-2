"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoDotFill } from "react-icons/go";

function AboutComponent() {
  const pathname = usePathname();

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8 text-white">
          {/* main div */}
          <div className="shadow-2xl bg-gradient-to-r from-gray-800 to-gray-400 p-6 rounded-lg">
            {/* title */}
            <div>
              <h1 className="text-3xl cursor-pointer bg-gradient-to-l from-green-700 via-red-700 to-blue-700 bg-clip-text text-transparent font-bold ">
                About ME:
              </h1>
            </div>
            {/* description */}
            <div className="mt-2 flex flex-col gap-2">
              <p className="text-gray-100">
                Senior Game Developer with 7+ years of experience in Unity3D and
                C#. Specialized in multiplayer game development, scalable
                architecture, and performance optimization for mobile, PC, and
                consoles including Nintendo Switch.
              </p>
            </div>

            {/* title */}
            <div className="mt-8">
              <h1 className="text-3xl cursor-pointer bg-gradient-to-l from-red-700 via-red-700 to-red-700 bg-clip-text text-transparent font-bold ">
                Professional Experience:
              </h1>
            </div>
            {/* description */}
            <div className="mt-2 grid grid-cols-1 gap-2 space-y-4">
              <p className="text-gray-100 justify-center items-center flex gap-4 text-balance">
                <span className=" decoration-2">
                  <GoDotFill className="text-black" />
                </span>
                Geniteam Solutions – Team Lead & CTO (5+ Years) Led the
                development of Scary Teacher, Pakistan’s highest-grossing and
                longest-running mobile game. Designed scalable architectures
                that still power the game today.
              </p>
              {pathname === "/about" && (
                <>
                  <p className="text-gray-100 justify-center items-center text-balance flex gap-4">
                    <span className=" decoration-2">
                      <GoDotFill className="text-black" />
                    </span>
                    Chief Architect & Lead Gameplay Programmer for Scary
                    Teacher. Built a scalable, maintainable codebase for
                    long-term success. Optimized performance, ensuring smooth
                    gameplay across all devices.
                  </p>
                  <p className="text-gray-100 justify-center items-center text-balance flex gap-4">
                    <span className=" decoration-2">
                      <GoDotFill className="text-black" />
                    </span>
                    Katana Games – CTO & Delivery Manager Worked on UNICEF’s
                    Daleela, an educational game for children, delivered under a
                    tight deadline. Developed multiplayer games and core
                    development foundations for Katana Games.
                  </p>
                  <p className="text-gray-100 justify-center items-center text-balance flex gap-4">
                    <span className=" decoration-2">
                      <GoDotFill className="text-black" />
                    </span>
                    Designed boilerplates and coding standards for the team.
                    Delivered Daleela on time while maintaining high quality.
                    Worked in Pre-Sales and Project Deliveries. Worked as Game
                    Programmer and Lead
                  </p>
                  {/* <p className="text-gray-100 justify-center items-center text-balance flex gap-4">
                    <span className=" decoration-2">
                      <GoDotFill className="text-black" />
                    </span>
                    Revolving Games – Middle Senior Developer Contributed to
                    Skyborne Legacy, initially developing its playable demo,
                    which led to full-scale production.
                  </p> */}
                  <p className="text-gray-100 justify-center items-center flex gap-4 text-balance">
                    <span className="">
                      <GoDotFill className="text-black" />
                    </span>
                    Floaty – CTO & Lead Programmer, Currently working on
                    aAA-level casual and idle mobile game, published by BoomBit.
                    Designed a development and art integration pipeline,
                    creating scalable, reusable components.
                  </p>
                </>
              )}
              {pathname !== "/about" && (
                <Link href={"/about"}>
                  <span className="flex justify-center animate-bounce mt-2">
                    to see click here
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
