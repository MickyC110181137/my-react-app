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
              <small>0</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>YOU σ`∀´)σ</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>THIS</small>
            </article>
          </div>

          <p>這是從網上抄的範例，我從這個範例中學到很多小細節</p>
          <a href="#contact" className="btn btn-primary">
            Let`s talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
