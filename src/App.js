import Home from "./views/Home"
import PixiumProject from "./views/PixiumProject";
import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import Footer from "./scenes/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Router>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route index path="/"  element={<Home setSelectedPage={setSelectedPage}/>} />
          <Route exact path="/pixium" element={<PixiumProject />}/>
          {/* <Navigate to="/" /> */}
        </Routes>

        <Footer/>
      </Router>
      </div>
  );
}

export default App;
