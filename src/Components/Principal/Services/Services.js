import React from "react";
import "./Services.css";
import { BsCheckAll } from "react-icons/bs";

const Services = () => {
  return (
    <section id="service">
      <h5>What I offer</h5>
      <h2>Services</h2>
      {/* =END OF UI/UX= */}
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Web Devekionebt</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
