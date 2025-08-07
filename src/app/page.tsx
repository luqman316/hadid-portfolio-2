// import Clients from "@/components/Clients";
import Clients from "@/components/Clients";
import CoreExpertise from "@/components/CoreExpertise";
import Experince from "@/components/Experince";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import ProjectNum from "@/components/ProjectNum";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
// import Summary from "@/components/Summary";

function MainPage() {
  return (
    <>
      <PageTransition>
        <Hero />
        <hr className=" container mx-auto mt-4 text-gray-500 opacity-20" />
        <div>
          <Summary />{" "}
          <hr className=" container mx-auto mt-4 text-gray-500 opacity-20" />
          <CoreExpertise />{" "}
          <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
          <Experince />
        </div>{" "}
        <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
        <ProjectNum />
        <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
        {/* Show only 8 projects on main page */}
        <Projects limit={8} />
        <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
        <Clients />
        {/* <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
      <section className="py-10 px-4 container mx-auto">
        <h2 className="text-3xl font-bold mb-4">🔧 3D Product Viewer</h2>
        <p className="mb-4 text-gray-600">
          This section demonstrates a live integration of 3DCommerce.studio —
          used for rendering interactive 3D models in eCommerce environments.
        </p>
        <ThreeDViewer />
      </section> */}
      </PageTransition>
    </>
  );
}

export default MainPage;

// update the image locations @ is src as default to update to root change the tsconfig.ts paths
