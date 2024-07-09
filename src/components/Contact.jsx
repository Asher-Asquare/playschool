import React from 'react';
import './Contact.css';
import contact_gif from '../assets/contact.gif';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"> <span>Contact</span> Us</h1>
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-clock"></i>
          <h3>Opening hours :</h3>
          <p>Monday - Friday: 09:30 AM to 13:30 PM</p>
          <p>Saturday: 09:30 AM to 13:00 PM</p>
        </div>
        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>truesunshine.playschools@gmail.com</p>
        </div>
        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>Phone number</h3>
          <p>+91 798-959-9833</p>
        </div>
      </div>
      <div className="row">
        <div className="image">
          <img src={contact_gif} alt=""/>
        </div>
        <form action="">
          <h3>Get in touch</h3>
          <div className="inputBox">
            <input type="text" placeholder="your name"/>
            <input type="email" placeholder="your email"/>
          </div>
          <div className="inputBox">
            <input type="number" placeholder="your number"/>
            <input type="text" placeholder="your subject"/>
          </div>
          <textarea placeholder="your message" cols="30" rows="10"></textarea>
          <input type="submit" value="Send Message" className="btn"/>
        </form>
      </div>
    </section>
  );
}

export default Contact;
