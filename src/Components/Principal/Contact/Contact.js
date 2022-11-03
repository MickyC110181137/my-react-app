import React from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { SiMessenger, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoMdMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>dummyegatori@gmail.com</h5>
            <a
              href="mailto:1209436216micky@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <SiMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>dummyegatori@gmail.com</h5>
            <a
              href="https://m.me/profile.php?id=100013102720729"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <SiWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>dummyegatori@gmail.com</h5>
            <a
              href="https://api.whatsapp.com/send?"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
