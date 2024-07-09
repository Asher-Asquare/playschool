import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3> <i className="fas fa-school"></i> True Sunshine </h3>
          <p>Welcome to True Sunshine Preschool, where every day is an adventure in learning! We provide a nurturing environment that fosters creativity, curiosity, and a love for discovery in our young learners.</p>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <a href="/enroll-now"> <i className="fas fa-caret-right"></i> Enroll Now</a>
          <a href="#"> <i className="fas fa-caret-right"></i> Parent Portal</a>
          <a href="#"> <i className="fas fa-caret-right"></i> School Calendar</a>
          <a href="#"> <i className="fas fa-caret-right"></i> Lunch Menu</a>
          <a href="#"> <i className="fas fa-caret-right"></i> School Supply List</a>
        </div>
        <div className="box">
          <h3>Category</h3>
          <a href="#"> <i className="fas fa-caret-right"></i> About us</a>
          <a href="#"> <i className="fas fa-caret-right"></i> Academics</a>
          <a href="/admissions"> <i className="fas fa-caret-right"></i> Admissions</a>
          <a href="#"> <i className="fas fa-caret-right"></i> News & Events</a>
          <a href="#"> <i className="fas fa-caret-right"></i> Contact Us</a>
        </div>
        <div className="box">
          <h3>Extra Links</h3>
          <a href="#"> <i className="fas fa-caret-right"></i> Privacy Policy</a>
          <a href="#"> <i className="fas fa-caret-right"></i> Terms of Use</a>
          <a href="#location-map"> <i className="fas fa-caret-right"></i> Site Map</a>
          <a href="#"> <i className="fas fa-caret-right"></i> FAQs</a>
          <a href="#"> <i className="fas fa-caret-right"></i> Accessibility Statement</a>
        </div>
      </div>
      <div className="credit"> &copy; copyright @ 2024 by <span>asquaretech</span></div>
    </section>
  );
}

export default Footer;
