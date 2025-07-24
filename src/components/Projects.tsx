import ProjectLayout from "./ProjectLayout";

function Projects() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8 text-white">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {/* <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold underline underline-offset-8 tracking-tight text-gray-100">
                Projects
              </h1>
            </div> */}
            <ProjectLayout
              image="/game1/img1.jpg"
              title="Azure Dungeon Surviror"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
            />
            <ProjectLayout
              image="/game2/img1.jpg"
              title="Educational Game"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
            />
            <ProjectLayout
              image="/game3/img1.jpg"
              title="TripleHandPoker-Multiplayer-CardsGame"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
            />
            <ProjectLayout
              image="/game4/img1.jpg"
              title="Ninja Hero Shadow Warrior"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
            />
            <ProjectLayout
              image="/game5/img1.jpg"
              title="SkyBorne Legacy - MMORPG - Mutliplayer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nunc, nec aliquam nunc nisl sit amet nunc."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
