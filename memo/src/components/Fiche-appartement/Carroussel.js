import React, { useState } from "react";

function Carrousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt="carroussel" className="slider-image"/>
      <div className="slider-navigation">
        <button onClick={prevImage} className="slider-arrow prev-arrow">
          &#8249;
        </button>
        <button onClick={nextImage} className="slider-arrow next-arrow">
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Carrousel;

  