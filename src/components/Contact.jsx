import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxr3mr",  // service ID
        "template_u3p00rb",  // template ID
        e.target,
        "0Q5hrU4bHs6fcwScP"   // public key
      )
      .then(
        () => {
          setMessageSent(true);
          e.target.reset();
        },
        (error) => console.error(error)
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-box">

        <h2 className="contact-title">Contact Me</h2>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/Dhruv10-r" target="_blank" rel="noreferrer">
            <FaGithub className="social-icon" />
          </a>

          <a href="https://www.linkedin.com/in/dhruv-r-55b888262/" target="_blank" rel="noreferrer">
            <FaLinkedin className="social-icon" />
          </a>

          <a href="mailto:dhruv.prakash.rathod@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" name="from_email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea name="message" rows="6" placeholder="Write your message..." required />

          <button className="submit-btn" type="submit">
            Send Message
          </button>

          {messageSent && <p className="success-msg">Message sent successfully! 🎉</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
