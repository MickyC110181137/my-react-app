import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

import Menu from "./Components/Container/Menu/Menu";

function App() {
  const [toggle, setToggle] = useState(false);
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <BrowserRouter>
      <main>
        <div className="test">
          <Menu toggle={toggle} />
        </div>

        <div className="body">
          <div className="a1">
            <div className="a2">text</div>
            <div
              className="cursor"
              style={{ left: cursorX + "px", top: cursorY + "px" }}
            ></div>
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
