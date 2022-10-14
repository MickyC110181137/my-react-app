import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Cursor from "./Components/cursor/cursor";
import Menu from "./Components/Container/Menu/Menu";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <BrowserRouter>
      <main>
        <div className="test">
          <Menu toggle={toggle} />
        </div>

        <div className="body">
          <Cursor />
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
