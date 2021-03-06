import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Main from "./Components/Container/Login/Main";
import Upload from "./Components/Container/SubmitPhoto/UpLoad";
import Slider from "./Components/Container/Slider/Slider";
import Todomain from "./Components/Container/Todo/Todomain";
import Calculator from "./Components/Container/Calculator/Calculator";
import Imageslider01 from "./Components/Container/MainSliderImage/Imageslider01.js";
import { SliderData1 } from "./Components/Container/MainSliderImage/SliderData1";

function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="flexhome">
          <div className="starthome">
            <div className="homephoto">Hello</div>
            <div className="hometext">
              <Link to="/">Portfolio</Link>
            </div>
          </div>
          <div className="portfolio">
            <Imageslider01 slides={SliderData1} />
            <Routes>
              <Route path="/Portfolio0" element={<Main />} />
              <Route path="/Portfolio1" element={<Upload />} />
              <Route path="/Portfolio2" element={<Slider />} />
              <Route path="/Portfolio3" element={<Todomain />} />
              <Route path="/Portfolio4" element={<Calculator />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}
export default App;
