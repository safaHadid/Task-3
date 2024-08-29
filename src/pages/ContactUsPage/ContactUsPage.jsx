import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './ContactUsPage.css'
import Footer from '../../components/Footer/Footer'

const ContactUsPage = () => {
  return (
    <div className='conactuspage'>
      <PageHeader title="HOME / CONTACT US" text="CONTACT US" />
      <div className="row">
        <div className="right-col">
        <div className="content">
          <div className="contact-us-tag">| CONTACT US</div>
          <div className="contact-us-title">
            Get In Touch <br /> With Our <br/> Agents
          </div>
          <div className="contact-us-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at saepe autem quasi ea aliquid tempora sunt corporis a odit quas et libero nihil enim, ipsam officiis veritatis! Amet praesentium quia laudantium blanditiis suscipit repellendus pariatur consequuntur.
          </div>
        </div>
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
        <div className="left-col">
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
      <div className="image-map">
        <img src="/assets/map-1.png" alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default ContactUsPage