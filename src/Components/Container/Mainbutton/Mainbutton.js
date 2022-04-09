import { Link } from "react-router-dom";
import React from "react";
import "../../../App.css";

export default function Mainbutton() {
  return (
    <div className="flex1">
      <div className="Loginfrom">
        <Link to="Loginfrom">
          <button className="pagebutton">Loginfrom</button>
        </Link>
      </div>
      <div className="Upload">
        <Link to="Upload">
          <button className="pagebutton1">Upload</button>
        </Link>
      </div>
      <div className="Slider">
        <Link to="Slider">
          <button className="pagebutton2">Slider</button>
        </Link>
      </div>
      <div className="Todomain">
        <Link to="Todomain">
          <button className="pagebutton3">Todomain</button>
        </Link>
      </div>
      <div className="Calculator">
        <Link to="Calculator">
          <button className="pagebutton4">Calculator</button>
        </Link>
      </div>
      <div className="Calculator">
        <Link to="ImageSlider">
          <button className="pagebutton4">ImageSlider</button>
        </Link>
      </div>
    </div>
  );
}
