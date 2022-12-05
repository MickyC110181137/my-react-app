import React from "react";
import "./Footer.css";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        EGATOR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <AiOutlineFacebook />
        </a>
        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterCircle />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EGATOR Tutorials. All rights reservice</small>
      </div>
    </footer>
  );
};

export default Footer;
