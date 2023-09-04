import React from "react";
import ReactPlayer from "react-player";

export default function Slide({ data: { url, title, content }, isAbout }) {
  const renderContent = () => {
    const fullContent = [];
    for (let i = 0; i < content.length; i++) {
      fullContent.push(
        <li className="list-none before:content-['\27A4'] before:mr-5">
          {content[i]}
        </li>
      );
    }
    return fullContent;
  };
  
  if (isAbout) {
    return (
      <div className="slide flex-[1_0_100%] sm:flex mx-auto justify-center z-2">
        <div className="polaroid sm:w-[42%]">
          <div className="polaroid-frame relative bg-white rounded-md max-w-[100%] px-[6%] py-[6%] sm:pb-[17%] shadow-lg">
            <img
              src={url}
              alt={title}
              className="block border-black border-2 rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="slide-text sm:w-[50%] w-full">
          <p className="text-header font-playfair font-semibold text-2xl md:text-4xl my-[6%]">
            {title}
          </p>
          <div className="text-body font-playfair flex flex-col gap-4 justify-start px-[3vw] text-md sm:text-lg text-left">
            {renderContent()}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="slide flex-[1_0_100%] sm:flex mx-auto justify-center z-2">
        <div className="player-wrapper h-[70vh] w-[50wh]">
          {url.slice(-3) == "mp4" ? (
            <ReactPlayer url={url} controls={true} width="100%" height="100%" />
          ) : (
            <img
              src={url}
              alt={title}
              className="block border-black border-2 rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    );
  }
}
