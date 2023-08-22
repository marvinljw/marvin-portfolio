import React from "react";

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide relative flex-[1_0_100%]">
      <img src={url} alt={title} className="slide-image w-[90%] my-auto mx-auto" />
      <div className="slide-title">{title}</div>
    </div>
  );
}