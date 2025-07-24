function Summary() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-5 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Summary */}
          <div className="w-full max-w-2xl  ">
            <h1 className="text-3xl sm:text-4xl font-extrabold underline underline-offset-8 mb-3">
              About Me
            </h1>
            <h2 className="text-base sm:text-lg font-medium text-white mb-2">
              Senior Game Developer | AI Enthusiast | Team Leader
            </h2>
            <p className="text-sm sm:text-lg text-gray-400 hover:text-white transition-colors duration-200">
              With 7+ years of experience in Unity3D and C#, I specialize in
              game programming, scalable architectures, and performance
              optimization. I’ve worked across mobile, PC, and multiplayer game
              development, building long-lasting, maintainable, high-performance
              codebases.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            {/* <Image
              src="/about4.jpg"
              alt="Background Hadid"
              width={300}
              height={300}
              className="rounded-lg bg-blend-multiply bg-transparent"
            /> */}

            <video
              preload="none"
              autoPlay
              muted
              loop
              className="min-w-auto min-h-auto mx-auto mb-4 rounded-lg  w-full h-auto md:h-full object-cover  cursor-pointer"
              src="/ab1.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
