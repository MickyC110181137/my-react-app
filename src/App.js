import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Cursor from "./Components/cursor/cursor";
import Menu from "./Components/Container/Menu/Menu";
import Intro from "./Components/Container/Intro/Intro";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const Chcolor = document.getElementById("Chcolor");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 780) {
        Chcolor.style.backgroundColor = "black";
      } else {
        Chcolor.style.backgroundColor = "transparent";
      }
    });
  });
  return (
    <BrowserRouter>
      <main>
        <div className="test">
          <Menu toggle={toggle} />
        </div>

        <div className="body">
          <Intro />
          <Cursor />
          <div
            className="test1"
            id="Chcolor"
            style={{
              height: "400px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            12313
          </div>
        </div>

        <div
          className="toggle"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        ></div>
      </main>
    </BrowserRouter>
  );
}
export default App;
