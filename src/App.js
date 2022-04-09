import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Main from "./Components/Container/Login/Main";
import Upload from "./Components/Container/SubmitPhoto/UpLoad";
import Slider from "./Components/Container/Slider/Slider";
import Todomain from "./Components/Container/Todo/Todomain";
import Calculator from "./Components/Container/Calculator/Calculator";
import Mainbutton from "./Components/Container/Mainbutton/Mainbutton";
import Imagesliser01 from "./Components/Container/SliderImage/Imageslider01.js";

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
        <Route path="/ImageSliser01" element={<Imagesliser01 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
