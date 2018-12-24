import React from 'react';

const GalleryQuarter4 = function(props) {
  let highLight = props.highLight4;
  
  console.log('Quarter -- highLight: ', highLight);

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
}
export default GalleryQuarter4;