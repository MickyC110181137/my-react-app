import React from "react";
import "./Menu.css";

export default function Menu({ toggle }) {
  return (
    <div id="curtain" className={toggle > 0 ? "active" : ""}>
      <span></span>
      <span></span>
      <span></span>
      <ul>
        <li data-text="Home">
          <a href="#">Home</a>
        </li>
        <br />
        <li data-text="About">
          <a href="#">About</a>
        </li>
        <br />
        <li data-text="Services">
          <a href="#">Services</a>
        </li>
        <br />
        <li data-text="Portfolio">
          <a href="#">Portfolio</a>
        </li>
        <br />
        <li data-text="Contact">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
