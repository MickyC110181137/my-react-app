import React from "react";
import { Link } from "react-router-dom";
import Imageslider01 from "../MainSliderImage/Imageslider01";
import { SliderData1 } from "../MainSliderImage/SliderData1";
import Main from "../Login/Main";

function HomePage1({ current }) {
  const Portfolio0 = Main;
  return (
    <main>
      <div className="flexhome">
        <div className="starthome">
          <div className="homephoto">Hello</div>
          <div className="hometext">
            <Link to="/">Portfolio</Link>
          </div>
        </div>
        <div className="portfolio">
          <Imageslider01 slides={SliderData1} current={current} />
          <Portfolio0 />
        </div>
      </div>
    </main>
  );
}
export default HomePage1;
