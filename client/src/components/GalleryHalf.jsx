import React from 'react';

const GalleryHalf = function (props) {

  return (
    <div className="col-6 half" data-position={props.position}>
      <img
        className={props.highLight ? 'img-fluid img-main' : 'img-fluid overlay-img img-main'}
        data-position={props.position}
        onMouseOver={props.hoverOn}
        onMouseOut={props.hoverOff}
        src={props.image}
        onClick={props.handleImageClickShowCarousel}
      />
    </div>
  );
};

export default GalleryHalf;