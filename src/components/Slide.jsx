import React from "react";

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide relative flex-[1_0_100%] flex">
      <div className="slide-image">
        <img src={url} alt={title} className="basis-1/2"/>
      </div>
      
      <div className="slide-title basis-1/2">{title}</div>
    </div>
  );
}