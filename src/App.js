import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import Main from "./Components/Login/Main";
import Upload from "./Components/SubmitPhoto/UpLoad";
import Slider from "./Components/Slider/Slider";
import Todomain from "./Components/Todo/Todomain";
import Calculator from "./Components/Calculator/Calculator";

function App() {
  return (
    <BrowserRouter>
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
      </div>

      <Routes>
        <Route path="/Loginfrom" element={<Main />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Todomain" element={<Todomain />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
