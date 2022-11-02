import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { BiAward } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Learning</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui autem
            perferendis eaque, ullam ipsum sit dolores maxime esse omnis
            consequatur atque provident temporibus quas obcaecati iusto earum,
            perspiciatis corrupti. Quam.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
