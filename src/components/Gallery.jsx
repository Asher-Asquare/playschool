import React, { useEffect } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import './Gallery.css';
import lightGallery from 'lightgallery';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import Gallery1 from '../assets/gallery-1.jpg';
import Gallery2 from '../assets/gallery-2.jpg';
import Gallery3 from '../assets/gallery-3.jpg';
import Gallery4 from '../assets/gallery-4.jpg';
import Gallery5 from '../assets/gallery-5.jpg';
import Gallery6 from '../assets/gallery-6.jpg';

const Gallery = () => {
  useEffect(() => {
    lightGallery(document.querySelector('.gallery .gallery-container'), {
      plugins: [lgAutoplay],
      speed: 2000,
      autoplay: true,
      pause: 4000,
      progressBar: true,
    });
  }, []);

  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">Our <span>gallery</span></h1>
      <div className="gallery-container">
        <a href={Gallery1} className="box">
          <img src={Gallery1} alt=""/>
          <div className="icon"> <i className="fas fa-plus"></i></div>
        </a>
        <a href={Gallery2} className="box">
          <img src={Gallery2} alt=""/>
          <div className="icon"> <i className="fas fa-plus"></i></div>
        </a>
        <a href={Gallery3} className="box">
          <img src={Gallery3} alt=""/>
          <div className="icon"> <i className="fas fa-plus"></i></div>
        </a>
        <a href={Gallery4} className="box">
          <img src={Gallery4} alt=""/>
          <div className="icon"> <i className="fas fa-plus"></i></div>
        </a>
        <a href={Gallery5} className="box">
          <img src={Gallery5} alt=""/>
          <div className="icon"> <i className="fas fa-plus"></i></div>
        </a>
        <a href={Gallery6} className="box">
          <img src={Gallery6} alt=""/>
          <div className="icon"> <i className="fas fa-plus"></i></div>
        </a>
      </div>
    </section>
  );
}

export default Gallery;
