import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "./Slider";


export default function SlidesList( {isAbout} ) {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className={`slideslist flex h-[100%] w-[100%] transition ease-in-out duration-300`}
     style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => {
        return <Slide key={index} data={slide} isAbout={isAbout}/>
      })}
    </div>
  );
}