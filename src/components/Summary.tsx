import Image from "next/image";

function Summary() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
             <div className="grid justify-center items-center ">
              <div className=" p-2  grid justify-center items-center gap-4">
                <div>
                  {/* <h2 className=" italic animate-pulse hover:animate-none ">
                    The perfect for your game development needs
                  </h2> */}
                </div>
                <div className="px-14">
                  <Image
                    src="/about4.jpg"
                    alt="Background Hadid"
                    width={300}
                    height={300}
                    className="flex justify-center items-center rounded-lg bg-blend-multiply bg-transparent"
                  />
                </div>
              </div>
            </div>
            {/* Summary: Top Right */}
            <div className=" row-start-1 col-start-1 md:row-start-1 md:col-start-2 flex flex-col items-end mt-0 md:mt-0">
              <div className="w-full max-w-2xl mx-auto md:mx-0 p-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold underline underline-offset-8 mb-1 ">
                  Summary
                </h1>
                <h2 className="text-bvse sm:text-lg font-medium text-white mb-1 mt-4">
                  Senior Game Developer | AI Enthusiast | Team Leader
                </h2>
                <p className="text-sm sm:text-lg mb-1 text-gray-400 hover:text-white text-balance mt-1 transition-colors duration-200">
                  With 7+ years of experience in Unity3D and C#, I specialize in
                  game programming, scalable architectures, and performance
                  optimization. I’ve worked across mobile, PC, and multiplayer
                  game development, building long-lasting, maintainable,
                  high-performance codebases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
