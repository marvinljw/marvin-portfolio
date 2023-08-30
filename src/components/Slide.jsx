import React from "react";

export default function Slide({ data: { url, title, content } }) {
  
  const renderContent = () => {
    const fullContent = [];
    for (let i = 0; i < content.length; i++) {
      fullContent.push(
        <li className="list-none before:content-['\27A4'] before:mr-5">{content[i]}</li>
      )
    };
    return fullContent
  }

  return (
    <div className="slide flex-[1_0_100%] justify-center flex z-2">
      <div className="polaroid w-[42%] h-[100%]">
        <div className="polaroid-frame relative bg-white rounded-md max-w-[100%] px-[6%] pt-[6%] pb-[17%] shadow-lg">
          <img
            src={url}
            alt={title}
            className="block border-black border-2 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="slide-title w-[50%]">
        <p className="text-header font-playfair font-semibold text-2xl md:text-4xl my-[6%]">
          {title}
        </p>
        <div className="text-body font-playfair flex flex-col gap-4 justify-start px-[3vw] text-lg text-left">
           {renderContent()}
            {/* <li className="list-none before:content-['\27A4'] before:mr-5">Studying in National University of Singapore (NUS)</li>
            <li className="list-none before:content-['\27A4'] before:mr-5">Studying in National University of Singapore (NUS)</li>
            <li className="list-none before:content-['\27A4'] before:mr-5">Studying in National University of Singapore (NUS)</li>
            <li className="list-none before:content-['\27A4'] before:mr-5">Studying in National University of Singapore (NUS)</li> */}
        </div>
      </div>
    </div>
  );
}
