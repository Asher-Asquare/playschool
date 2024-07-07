import React from 'react';
import './Activities.css';
import activity1 from '../assets/activities1.png';
import activity2 from '../assets/activities2.png';
import activity3 from '../assets/activities3.png';
import activity4 from '../assets/activities4.png';
import activity5 from '../assets/activities5.png';
import activity6 from '../assets/activities6.png';
import activity7 from '../assets/activities7.png';
import activity8 from '../assets/activities8.png';

const Activities = () => {
  return (
    <section className="activities">
      <h1 className="heading">Our <span>Activities</span></h1>
      <div className="box-container">
        <div className="box">
          <img src={activity1} alt=""/>
          <h3>Building Blocks</h3>
        </div>
        <div className="box">
          <img src={activity2} alt=""/>
          <h3>Dramatic Play</h3>
        </div>
        <div className="box">
          <img src={activity3} alt=""/>
          <h3>Learning</h3>
        </div>
        <div className="box">
          <img src={activity4} alt=""/>
          <h3>Sports</h3>
        </div>
        <div className="box">
          <img src={activity5} alt=""/>
          <h3>Puzzles</h3>
        </div>
        <div className="box">
          <img src={activity6} alt=""/>
          <h3>Field Trips</h3>
        </div>
        <div className="box">
          <img src={activity7} alt=""/>
          <h3>Creative arts</h3>
        </div>
        <div className="box">
          <img src={activity8} alt=""/>
          <h3>Music</h3>
        </div>
      </div>
    </section>
  );
}

export default Activities;
