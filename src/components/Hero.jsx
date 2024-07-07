// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import home_image from '../assets/home.png';

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Welcome to our <span>TrueSunshine</span></h3>
        <p>Welcome to True Sunshine Preschool, where every day is an adventure in learning! We provide a nurturing environment that fosters creativity, curiosity, and a love for discovery in our young learners.</p>
        <a href="#" className="btn">Learn more</a>
        <Link to="/enroll-now" className="btn">Enroll Now</Link>
      </div>
      <div className="image">
        <img src={home_image} alt=""/>
      </div>
      <div className="custom-shape-divider-bottom-1684324473">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
