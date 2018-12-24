import React from 'react';

const GalleryHalf = function (props) {
  console.log('GalleryHalf: ');
  console.log('props.image: ', props.image);
  console.log("********* props.highLight *********: ", props.highLight);

  return (
    <div className="col-6 half">
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