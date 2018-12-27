import React from 'react';
const Carousel = function (props) {

  return (
    <div className={props.showCarousel ? 'carousel show-carousel' : 'carousel hide-carousel'}>
      <h1>
        Carousel Here
      </h1>
    </div>
  );
};

export default Carousel;