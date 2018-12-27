import React from 'react';

const GalleryHalf = function (props) {
  console.log('GalleryHalf: ');

  return (
    <div className="col-6 half" data-position={props.position}>
      <img
        className={props.highLight ? 'img-fluid' : 'img-fluid overlay-img'}
        data-position={props.position}
        onMouseOver={props.hoverOn}
        onMouseOut={props.hoverOff}
        src={props.image}
        onClick={props.handleImageClick}
      />
    </div>
  );
};

export default GalleryHalf;