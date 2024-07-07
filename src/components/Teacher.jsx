import React from 'react';
import './Teacher.css';
import Suparna from '../assets/Suparna.jpg';
import Alekhya from '../assets/Alekhya.jpg';
import Poojitha from '../assets/Poojitha.jpg';

const Teacher = () => {
  return (
    <section className="teacher" id="teacher">
      <h1 className="heading">Our <span> Teachers</span></h1>
      <div className="box-container">
        <div className="box">
          <img src={Suparna} alt=""/>
          <h3>Suparna</h3>
          <p>Founder</p>
          <div className="share">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="box">
          <img src={Alekhya} alt=""/>
          <h3>Alekhya</h3>
          <p>Founder</p>
          <div className="share">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="box">
          <img src={Poojitha} alt=""/>
          <h3>Poojitha</h3>
          <p>Founder</p>
          <div className="share">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teacher;
