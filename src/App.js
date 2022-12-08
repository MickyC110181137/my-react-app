import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import RingLoader from "react-spinners/RingLoader";

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
  /* const [toggle, setToggle] = useState(false); */
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {
        loading ? (
          <div className="load">
            <RingLoader
              color={"#36d7b7"}
              loading={loading}
              size={250}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          /* <div className="test">
      <Menu toggle={toggle} />
    </div> */
          <BrowserRouter>
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
          </BrowserRouter>
        )
        /* <div
      className="toggle"
      onClick={() => {
        setToggle((prev) => !prev);
      }}
    ></div> */
      }
    </div>
  );
}
export default App;
