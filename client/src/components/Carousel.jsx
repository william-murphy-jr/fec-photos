import React from 'react';
const Carousel = function (props) {

  return (
    <div className={props.showCarousel ? 'carousel show-carousel' : 'carousel hide-carousel'}>
      <div>
        <span className='close' onClick={props.hideCarousel}>
          &times;
        </span>
      </div>
      <h1>
        Carousel Here
      </h1>
    </div>
  );
};

export default Carousel;