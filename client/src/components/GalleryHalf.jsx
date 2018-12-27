import React from 'react';

const GalleryHalf = function (props) {
  console.log('GalleryHalf: ');

  return (
    <div className="col-6 half">
      <h1 className="bnb-title">Best BnB Gallery</h1>
      <img
        className={props.highLight ? 'img-fluid' : 'img-fluid overlay-img'}
        data-position={props.position}
        onMouseOver={props.hoverOn}
        onMouseOut={props.hoverOff}
        src={props.image}
      />
    </div>
  );
};

export default GalleryHalf;