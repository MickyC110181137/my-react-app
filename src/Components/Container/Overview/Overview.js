import React, { useState } from "react";
import "./Overview.css";
import Slider from "../Slider/Slider";
import Upload from "../SubmitPhoto/UpLoad";

export default function Overview() {
  const [Pclick, setPclick] = useState(0);

  return (
    <div className="Profile">
      <div
        className="Profilebox"
        onClick={() => {
          setPclick(1);
        }}
      >
        <div className="textbox">
          <div id={Pclick === 1 ? "Visbox" : ""} className="Visbox">
            {Pclick === 1 ? <Slider /> : <div />}
          </div>
          ABCD01
        </div>
        <div className={Pclick === 1 ? "" : "textAni"}></div>
      </div>
      <div
        className="Profilebox"
        onClick={() => {
          setPclick(2);
        }}
      >
        <div className="textbox">
          <div id={Pclick === 2 ? "Visbox" : ""} className="Visbox">
            {Pclick === 2 ? <Upload /> : <div />}
          </div>
          ABCD02
        </div>
        <div className={Pclick === 2 ? "" : "textAni"}></div>
      </div>
      <div className="Profilebox">
        <div className="textbox">ABCD03</div>
        <div className="textAni"></div>
      </div>
      <div className="Profilebox">
        <div className="textbox">ABCD04</div>
        <div className="textAni"></div>
      </div>
      <div className="Profilebox">
        <div className="textbox">ABCD05</div>
        <div className="textAni"></div>
      </div>
      <div className="s" style={{ height: "2000px", width: "100%" }}></div>
    </div>
  );
}
