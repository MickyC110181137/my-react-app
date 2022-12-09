import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="Line-box">
      <div className="Line"></div>
      <div className="Line">
        <div className="Line-white1"></div>
      </div>
      <div className="Line">
        <div className="Line-white2"></div>
      </div>
      <div className="Line">
        <div className="Line-white3"></div>
      </div>
      <div className="Line">
        <div className="Line-white4"></div>
      </div>
    </div>
  );
};

export default Loading;
