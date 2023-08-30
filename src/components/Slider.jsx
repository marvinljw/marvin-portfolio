import { useState, useEffect, createContext } from "react";
import SlidesList from "./SlidesList";
import PropTypes from "prop-types";
import Arrows from "./Arrows";
import Dots from "./Dots";

export const SliderContext = createContext();

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {
  const [items, setItems] = useState([
    {
      title: "Am a Student!",
      url: "../assets/front_img.jpg",
      content: [
        "Graduating from National University of Singapore on May 2024",
        "Am an independent, fast Learner and hard worker",
        "My motto in life is to be 1% every single day and enjoy the journey",
      ],
    },
    {
      title: "Love Adventures!",
      url: "../assets/paragliding.jpg",
      content: [
        "Went to paraglide in Chamonix, France on Feb 2023",
        "Went to fly a glider in Sweden on April 2023",
        "Adventures brings the thrills and happiness for me",
        "Open to overseas opportunities if possible!",
      ],
    },
    {
      title: "Love talking to people!",
      url: "../assets/friends.jpg",
      content: [
        "Made lots of loving friends in Delft, Netherlands on my exchange",
        "Love to have meaningful discussion to generate new innovative ideas",
        "Everyone is unique and has their special story to tell :D",
      ],
    },
    { title: "I Love Nature", url: "../assets/nature.jpg", content: ["xxxx"] },
  ]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  // useEffect(() => {
  //   if (!autoPlay) return;

  //   const interval = setInterval(() => {
  //     changeSlide(1);
  //   }, autoPlayTime);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <div className={`slider w-[${width}] relative flex justify-center `}>
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows />
        <div
          className={`viewport w-[80%] h-full overflow-hidden `}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <SlidesList />
          <Dots />
        </div>
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%",
};

export default Slider;
