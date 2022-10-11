import React from "react";
import "./Menu.css";

export default function Menu({ toggle }) {
  return (
    <div id="curtain" className={toggle > 0 ? "active" : ""}>
      <span></span>
      <span></span>
      <span></span>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
