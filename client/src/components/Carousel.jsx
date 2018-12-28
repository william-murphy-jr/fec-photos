import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Arrow from './Arrow.jsx';

const Carousel = function (props) {

  return (
    <div className={props.showCarousel ? "carousel show-carousel" : "carousel hide-carousel"}>
      <div>
        <ImageSlide url={'http://lorempixel.com/1200/650/food'} 
          handleImageClickHideCarousel={props.handleImageClickHideCarousel}
          previousSlide={props.previousSlide}
          nextSlide={props.nextSlide}
        />
      </div>

    </div>
  );
};

export default Carousel;