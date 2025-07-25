import CoreExpertise from "@/components/CoreExpertise";
import Experince from "@/components/Experince";
import Hero from "@/components/Hero";
import ProjectNum from "@/components/ProjectNum";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
// import Summary from "@/components/Summary";

function MainPage() {
  return (
    <>
     <Hero /> <br /> <br />
      <div>
        <Summary />{" "}
        <hr className=" container mx-auto mt-4 text-gray-500 opacity-20" />
        <CoreExpertise />{" "}
        <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
        <Experince />
      </div>{" "}
      <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
    
      <ProjectNum/>
      <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" />
      <Projects />
      <br /> 
      {/* <hr className=" container mx-auto text-gray-500 mt-4 opacity-20" /> */}

      
    </>
  );
}

export default MainPage;



// update the image locations @ is src as default to update to root change the tsconfig.ts paths
