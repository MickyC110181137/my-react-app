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
      if (window.scrollY > 650 && window.scrollY < 1160) {
        Chcolor.style.backgroundColor = `rgba(${(1160 - window.scrollY) / 2}, ${
          (1160 - window.scrollY) / 2
        }, ${(1160 - window.scrollY) / 2})`;
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <main>
        <div className="test">
          <Menu toggle={toggle} />
        </div>

        <div className="body" id="Chcolor" style={{ backgroundColor: "white" }}>
          <Intro />
          <Cursor />
          <div
            className="test1"
            style={{
              height: "1000px",
              width: "100%",
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
