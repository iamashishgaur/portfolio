import React, { useRef } from "react";
import "./Contactme.scss";
import contact from '../../Assets/Image/contact.jpg';
import { RiContactsFill } from 'react-icons/ri'
import emailjs from '@emailjs/browser'


const ContactMe = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_50hl24i', 'template_41dywda', form.current, 'TR5KPIzHRs1wqP7im')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div className="contact-main-container" id="contact">
        <span>
          <h1> <RiContactsFill /> Contact <span>Me</span></h1>
        </span>
        <hr />
        <div className="contant-container">
          <div className="contact-image">
            <img src={contact} alt="" ></img>
          </div>
          <div className="contact-form">
            <div className="form">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="to_name" className="inputgap" id="" placeholder="Your Name" required/>
                <input type="email" name='user_email' id="" placeholder="Your Email" className="email" required /><br />
                <textarea name="text" id="" name='message' cols="30" rows="10" placeholder="Your Message" required></textarea>
                <button className="message-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
