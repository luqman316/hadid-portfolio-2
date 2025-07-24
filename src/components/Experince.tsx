function Experince() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4  text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
            {/* core expertise */}
            <div className="row-start-3 col-start-1 md:row-start-3 md:col-start-2 flex flex-col justify-center">
              <div className="p-1 w-full max-w-2xl mt-0 mx-auto md:mx-0">
                <h1 className="text-3xl sm:text-4xl  font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
                  Professional Experience
                </h1>
                <div className="space-y-1 text-gray-100 text-sm sm:text-base leading-relaxed mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* ...existing experience content... */}
                    <div>
                        <span className="font-bold text-lg">FLOATY</span>
                        <br />
                        <span className="italic">
                            Lead Game Developer | Lead Programmer | Software Architect
                        </span>
                        <br />
                        <span className="text-sm">
                            March 2024 - Present (1 year 5 months) — Riyadh, Saudi Arabia
                        </span>
                        {/* ... */}
                    </div>
                    <div>
                        <span className="font-bold text-lg">Katana Games</span>
                        <br />
                        <span className="italic">
                            Lead Game Programmer | Delivery Manager
                        </span>
                        <br />
                        <span className="text-sm">
                            February 2023 - Present (2 years 6 months) — Lahore District, Punjab, Pakistan
                        </span>
                        {/* ... */}
                    </div>
                    <div>
                        <span className="font-bold text-lg">
                            IP Engineering Pro
                        </span>
                        <br />
                        <span className="italic">
                            Lead Game Developer | Game Dev Consultant | Delivery Manager
                        </span>
                        <br />
                        <span className="text-sm">
                            June 2023 - February 2024 (9 months) — Lebanon
                        </span>
                        {/* ... */}
                    </div>
                    <div>
                        <span className="font-bold text-lg">
                            Revolving Games, Inc.
                        </span>
                        <br />
                        <span className="italic">Senior Game Developer</span>
                        <br />
                        <span className="text-sm">
                            July 2022 - June 2023 (1 year) — San Francisco, California, United States
                        </span>
                        {/* ... */}
                    </div>
                    <div>
                        <span className="font-bold text-lg">Playly Studios</span>
                        <br />
                        <span className="italic">Software Engineer</span>
                        <br />
                        <span className="text-sm">
                            October 2021 - May 2022 (8 months) — Norway
                        </span>
                        {/* ... */}
                    </div>
                    <div>
                        <span className="font-bold text-lg">
                            GenITeam Solutions
                        </span>
                        <br />
                        <span className="italic">Senior Game Developer</span>
                        <br />
                        <span className="text-sm">
                            2017 - 2022 (5 years) — Lahore District, Punjab, Pakistan
                        </span>
                        {/* ... */}
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
                        {/* ... */}
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

export default Experince;
