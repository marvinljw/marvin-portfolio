import React, { useContext } from "react";
import { SliderContext } from "./Slider";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows absolute flex h-full z-10 items-center w-full justify-between">
      {/* LEFT ARROW */}
      <div
        className= "leftarrow bg-gradient-rainblue h-[3vw] w-[3vw] rotate-180 hover:scale-110 transition duration-300"
        onClick={() => changeSlide(-1)}
      >
        <img alt="arrow h-2px" src="assets/arrow.png" />
      </div>

      {/* RIGHT ARROW */}
      <div
        className="rightarrow bg-gradient-rainblue  h-[3vw] w-[3vw] hover:scale-110 ease-in duration-300"
        onClick={() => changeSlide(1)}
      >
        <img alt="arrow h-2px" src="assets/arrow.png" />
      </div>
    </div>
  );
}
