import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Menu from "./Components/Container/Menu/Menu";
import Header from "./Components/Principal/Header/Header";
import Nav from "./Components/Principal/Nav/Nav";
import About from "./Components/Principal/About/About";
import Experience from "./Components/Principal/Experience/Experience";
import Testmonials from "./Components/Principal/Testmonials/Testmonials";
import Contact from "./Components/Principal/Contact/Contact";
import Services from "./Components/Principal/Services/Services";
import Portfolio from "./Components/Principal/Portfolio/Portfolio";
import Footer from "./Components/Principal/Footer/Footer";
import Cursor from "./Components/cursor/cursor";

function App() {
  const [toggle, setToggle] = useState(false);
  const Chcolor = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 650 && window.scrollY < 1160) {
        Chcolor.current.style.backgroundColor = `rgba(${
          (1160 - window.scrollY) / 2
        }, ${(1160 - window.scrollY) / 2}, ${(1160 - window.scrollY) / 2})`;
      } else if (window.scrollY < 650) {
        Chcolor.current.style.backgroundColor = "white";
      } else if (window.scrollY > 1160) {
        Chcolor.current.style.backgroundColor = "black";
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <main>
        <div className="test">
          <Menu toggle={toggle} />
        </div>
        <Header />
        <Cursor />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testmonials />
        <Contact />
        <Footer />
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
