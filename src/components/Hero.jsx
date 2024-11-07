import React from 'react';
import banner from '../assets/image1.jpeg'
import banner1 from '../assets/image4.jpeg'
import banner2 from '../assets/image2.jpeg'
import banner3 from '../assets/image3.jpeg'
import pp from '../assets/pp.jpeg'


function Hero() {
  return (
    <section id="hero" className="hero-container">
    <div className="image-row">
      <img src={banner} alt="Lado Izquierdo 1" className="side-image extremos" />
      <img src={banner1} alt="Lado Izquierdo 2" className="side-image" />
      <img src={pp} alt="Centro" className="center-image" />
      <img src={banner3} alt="Lado Derecho 1" className="side-image" />
      <img src={banner2} alt="Lado Derecho 2" className="side-image extremos" />
    </div>
    <div className="center-content">
      <h2>Welcome to my Portfolio!</h2>
      <p className="lead">My name is Paola, I'm a developer passionate about creating new web applications!</p>
    </div>
  </section>
  );
}

export default Hero;
