import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p className='hero-place'>Toranto, <span style={{color:"#f35525"}}>Canada</span></p>
      <h1 className="hero-title">HURRY <br /> GET THE <br /> BEST VILLA <br /> FOR YOU</h1>
      </div>
      
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src='/assets/banner-01.jpg' alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='/assets/banner-02.jpg' alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='/assets/banner-03.jpg' alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
