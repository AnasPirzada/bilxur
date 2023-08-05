import React, { useState } from 'react';
import left from '../svg/icons/left.svg';
import right from '../svg/icons/right.svg';
import '../Css/component.css';
import image1 from '../pngs/crousel/1.png';

const Crouseldet = () => {
  const images = [image1];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = index => {
    setCurrentIndex(index);
  };

  return (
    <main>
      <div className='carousel'>
        <img
          src={images[currentIndex]}
          className='carousel-images'
          alt='Carousel Image'
        />
        <div className='slide_direction'>
          <div className='left' onClick={handlePrevious}>
            <img
              src={left}
              alt='Left Arrow'
              style={{
                width: '62%',
                height: '78%',
                marginTop: '5px',
              }}
            />
          </div>
          <div className='right' onClick={handleNext}>
            <img
              src={right}
              alt='Right Arrow'
              style={{
                width: '62%',
                height: '78%',
                marginTop: '5px',
              }}
            />
          </div>
        </div>
        <div className='indicator'>
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Crouseldet;
