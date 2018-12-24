import React from 'react';

const GalleryQuarter1 = function(props) {
  let highLight = props.highLight1;
  // highLight1 = false;
  
  console.log('Quarter -- highLight1: ', highLight);

  return (
    <div className="col-6 quarter">
      <img
        className="img-fluid"
        className={highLight ? 'img-fluid' : 'img-fluid overlay-img'}
        data-position={props.position}
        onMouseOver={props.hoverOn}
        onMouseOut={props.hoverOff}
        src={props.image}
      />
    </div>
  );
};
export default GalleryQuarter1;