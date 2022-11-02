import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

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

  return (
    <BrowserRouter>
      {/* <div className="test">
          <Menu toggle={toggle} />
        </div> */}
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
      {/* <div
          className="toggle"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        ></div> */}
    </BrowserRouter>
  );
}
export default App;
