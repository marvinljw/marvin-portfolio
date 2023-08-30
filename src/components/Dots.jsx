import React, { useContext } from "react";
import { SliderContext } from "./Slider";

export default function Dots() {
  const { slidesCount, goToSlide, slideNumber } = useContext(SliderContext);

  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
          before:rounded-full before:border-2 before:border-yellow before:right-[-50%]
          before:top-[-50%]`;

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <button
          key={`dot-${i}`}
          className={`${i === slideNumber ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full z-10`}
          onClick={() => {goToSlide(i)}}
        />
      );
    }

    return dots;
  };

  return <div className="dots flex justify-center gap-3 mb-3 mt-[6vh]">{renderDots()}</div>;
}
