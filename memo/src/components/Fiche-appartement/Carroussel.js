import React, { useState } from 'react';
import PrevArrow from "../../assets/prev-arrow.png";
import NextArrow from "../../assets/next-arrow.png";

const Carrousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showArrows = images.length > 1;
  const showCounter = images.length > 1;

  const isMobile = window.innerWidth >= 375 && window.innerWidth <= 767;

  return (
    <div className={`carroussel ${isMobile ? 'mobile' : ''}`}>
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={` ${currentImageIndex + 1}`} />
        {showCounter && (
          <div className="image-counter">
          {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>

      {showArrows && (
        <div className="slider-arrow">
          <button className="prev-arrow" onClick={handlePrevClick}><img alt="prev-arrow" src={PrevArrow} /></button>
          <button className="next-arrow" onClick={handleNextClick}><img alt="next-arrow" src={NextArrow} /></button>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
