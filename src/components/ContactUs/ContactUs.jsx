import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div
        className="contact-us-bg"
        style={{ backgroundImage: `url("/assets/contact-bg.jpg")` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <div className="contact-us-tag">| CONTACT US</div>
          <div className="contact-us-title">
            Get In Touch <br /> With Our Agents
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-right">
            <img src="/assets/map.png" alt="Map" />

            <div className="contact-boxes">
              <div className="contact-box">
                <img src='/assets/phone-icon.png' className="contact-box-icon" />
                <p className="contact-box-title">
                <span style={{fontWeight:700}}>010-020-0340</span> <br /> phone number
                </p>
              </div>
              <div className="contact-box">
                <img src='/assets/email-icon.png' className="contact-box-icon" />
                <p className="contact-box-title">
                  <span style={{fontWeight:700}}>info@company.co</span> <br /> Business Email
                </p>
              </div>
            </div>
          </div>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Your phone number" />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
