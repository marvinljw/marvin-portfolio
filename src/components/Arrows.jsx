import React, { useContext } from "react";
import { SliderContext } from "./Slider";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows absolute flex h-full z-10 items-center w-full justify-between">
      
      {/* LEFT ARROW */}
      <div
        className= "leftarrow h-[3vh] w-[5%] hover:scale-110 transition duration-300"
        onClick={() => changeSlide(-1)}
      >
        <img alt="arrow" src="assets/arrow.png"/>
      </div>

      {/* RIGHT ARROW */}
      <div
        className="rightarrow h-[3vh] w-[5%] hover:scale-110 ease-in duration-300"
        onClick={() => changeSlide(1)}
      >
        <img alt="arrow" src="assets/arrow.png" className="rotate-180" />
      </div>
    </div>
  );
}
