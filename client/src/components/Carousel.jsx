import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';

const Carousel = function (props) {

  return (
    <div className={props.showCarousel ? 'carousel show-carousel' : 'carousel hide-carousel'}>
      <Arrow
        direction="left"
        clickFunction={props.previousSlide}
      />
      <div >
        <ImageSlide url={props.images[props.currentImageIndex].fileName}
          previousSlide={props.previousSlide}
          nextSlide={props.nextSlide}
        />
      </div>
      <Arrow
        direction="right"
        clickFunction={props.nextSlide}
      />
      <span className="close"
        onClick={props.handleImageClickHideCarousel}>
        &times;
      </span>
    </div>
  );
};

export default Carousel;