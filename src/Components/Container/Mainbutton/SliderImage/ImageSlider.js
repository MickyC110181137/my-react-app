import React, { useState } from "react";
import SliderData1 from "./SliderData1";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./ImageSlider.css";

export default function ImageSliser() {
  const [current, setCurrent] = useState(0);
  const length2 = SliderData1.length;
  const nextSlide = () => {
    setCurrent(current === length2 - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length2 - 1 : current - 1);
  };

  if (!Array.isArray(SliderData1) || SliderData1.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData1.map((slide, index1) => {
        return (
          <div
            className={index1 === current ? "slide active" : "slide"}
            key={slide.id}
          >
            {index1 === current && (
              <img
                src={process.env.PUBLIC_URL + `/Image/image${index1 + 1}.jpg`}
                alt=""
                className="image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
