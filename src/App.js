import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Main from "./Components/Container/Login/Main";
import Upload from "./Components/Container/SubmitPhoto/UpLoad";
import Slider from "./Components/Container/Slider/Slider";
import Todomain from "./Components/Container/Todo/Todomain";
import Calculator from "./Components/Container/Calculator/Calculator";
import Mainbutton from "./Components/Container/Mainbutton/Mainbutton";
import Imageslider01 from "./Components/Container/SliderImage/Imageslider01.js";
import { SliderData1 } from "./Components/Container/SliderImage/SliderData1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainbutton />} />
        <Route path="/Loginfrom" element={<Main />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Todomain" element={<Todomain />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route
          path="/Imageslider01"
          element={<Imageslider01 slides={SliderData1} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
