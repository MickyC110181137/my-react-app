import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Imageslider.css";
import { SliderData1 } from "./SliderData1";

const Imageslider01 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length2 = slides.length;
  const nextSlide = () => {
    setCurrent(current === length2 - 1 ? 0 : current + 1);
  };
  console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  const prevSlide = () => {
    setCurrent(current === 0 ? length2 - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider1">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData1.map((slide, index1) => {
        return (
          <div
            className={index1 === current ? "slide1 active" : "slide1"}
            key={index1}
          >
            <div className="portfoliotext">作品集</div>
            {index1 === current && (
              <Link to={`Portfolio${current}`}>
                <img className="image1" src={slide.image} alt="travel image" />
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Imageslider01;
