import React from 'react';
import './About.css';
import about_us from '../assets/about us.png';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"> <span>About</span> Us</h1>
      <div className="row">
        <div className="image">
          <img src={about_us} alt=""/>
        </div>
        <div className="content">
        <h3>Exploring, Growing, And Thriving Together</h3>
        <p>At True Sunshine Preschool, we believe in fostering a love for learning through exploration and creativity. Our nurturing environment encourages children to grow and thrive, both academically and socially.</p>
        <p>Join us in creating a strong foundation for your child's future. Our dedicated teachers and engaging curriculum ensure that each child receives personalized attention and a rich educational experience.</p>
          <a href="#" className="btn">Read more</a>
        </div>
      </div>
    </section>
  );
}

export default About;
