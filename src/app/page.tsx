import CoreExpertise from "@/components/CoreExpertise";
import Experince from "@/components/Experince";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";

function MainPage() {
  return (
    <>
     <Hero /> <br /> <br />
      <div>
        <Summary />{" "}
        <hr className=" container mx-auto text-gray-500 opacity-20" />
        <CoreExpertise />{" "}
        <hr className=" container mx-auto text-gray-500 opacity-20" />
        <Experince />
        <br />
        <br />
      </div>{" "}
      <hr className=" container mx-auto text-gray-500 opacity-20" />
      <br />
      <Projects />
      <br /> <br />
      {/* <h1>dqwded</h1> */}
    </>
  );
}

export default MainPage;
