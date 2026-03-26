import React, { useState } from 'react';
import './slider.scss';

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      console.log('imagetab: ', imageIndex);
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <section className="slider">
      {imageIndex !== null && (
        <section className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt="arrow"
              onClick={() => changeSlide('left')}
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="image" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              alt="arrow"
              onClick={() => changeSlide('right')}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </section>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="big image" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="image"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

export default Slider;
