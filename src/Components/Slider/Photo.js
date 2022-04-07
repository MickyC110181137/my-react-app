import React from "react";

// eslint-disable-next-line react/prop-types
export default function Photo({ obj, index, slideIndex }) {
  return (
    <div
      // eslint-disable-next-line react/prop-types
      key={obj.id}
      className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
    >
      <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />
    </div>
  );
}
