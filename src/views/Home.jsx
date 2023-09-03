import useMediaQuery from "../hooks/useMediaQuery";
import Projects from "../scenes/Projects";
import About from "../scenes/About";
import Landing from "../scenes/Landing";
import MySkills from "../scenes/MySkills";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";
import LineGradient from "../components/LineGradient";
import { useEffect } from "react";

const Home = (setSelectedPage) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    let targetElement;

    if (window.location.hash) {
      targetElement = document.querySelector(window.location.hash);
    }
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="app bg-deep-blue">
      <div className="w-5/6 mx-auto mb-12 md:h-[100vh]">
        {/* {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage = {setSelectedPage} 
          />
        )} */}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-[15vh]">
        <About />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-10">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto mb-10">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto mb-10">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
