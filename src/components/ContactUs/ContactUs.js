import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <p>Phone: +91 98xxx xxx10</p>
          <p>Email: support@foodify.com</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
