import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Imageslider.css";
import { SliderData1 } from "./SliderData1";

const Imageslider01 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length2 = slides.length;
  const nextSlide = () => {
    setCurrent(current === length2 - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length2 - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData1.map((slide, index1) => {
        return (
          <div
            className={index1 === current ? "slide active" : "slide"}
            key={index1}
          >
            {index1 === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Imageslider01;
