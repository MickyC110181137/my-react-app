import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { SiMessenger, SiWhatsapp } from "react-icons/si";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const buttom = useRef();
  const [message, setMessage] = useState("Send Message");
  const [bottom, setBottom] = useState(false);
  const [name, setName] = useState("btn");

  useEffect(() => {
    if (bottom === true) {
      setName("buttonAniStop");
      setMessage("SENDING MESSAGE");
      setTimeout(() => {
        setMessage("SENDING SUCCESSFUL");
      }, 2000);
    }
    setTimeout(() => {
      setBottom(false);
    }, 3000);
    if (bottom === false) {
      setName("btn");
      setMessage("Send Message");
    }
  }, [bottom]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0nav1e7",
        "template_mxjiojo",
        form.current,
        "Pk5Eii7Q2NlLx79eX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoMdMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>1209436216micky@gmail.com</h5>
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
            <h5>1209436216micky@gmail.com</h5>
            <a
              href="https://m.me/100013102720729"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <SiWhatsapp className="contact_option-icon" />
            <h4>Phone</h4>
            <h5>0965598438</h5>
            <a
              href="https://api.whatsapp.com/send?"
              target="_blank"
              rel="noreferrer"
            >
              Call me
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
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
          <div className="buttonDiv">
            <button
              ref={buttom}
              onClick={() => {
                setBottom(true);
              }}
              type="submit"
              className={name}
            >
              {message}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
