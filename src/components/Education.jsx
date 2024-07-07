import React from 'react';
import './Education.css';
import Education1 from '../assets/education1.png'
import Education2 from '../assets/education2.png'
import Education3 from '../assets/education3.png'

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">Our <span> Education</span></h1>
      <div className="box-container">
        <div className="box">
          <h3>Music Lessons</h3>
          <p>Our music lessons help children discover the joy of music through singing, instruments, and rhythm activities. They learn to express themselves creatively and develop a lifelong appreciation for music.</p>
          <img src={Education1} alt="Music Lessons"/>
        </div>
        <div className="box">
          <h3>Sports Lessons</h3>
          <p>In our sports lessons, children engage in fun physical activities that promote teamwork, coordination, and a healthy lifestyle. These lessons build physical fitness and social skills through play.</p>
          <img src={Education2} alt="Sports Lessons"/>
        </div>
        <div className="box">
          <h3>Drawing Lessons</h3>
          <p>Our drawing lessons encourage children to explore their creativity and improve their fine motor skills. They learn various techniques and styles, fostering a love for art and self-expression.</p>
          <img src={Education3} alt="Drawing Lessons"/>
        </div>
      </div>
    </section>
  );
}

export default Education;
