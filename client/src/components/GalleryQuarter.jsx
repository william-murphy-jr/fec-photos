import React from 'react';

const GalleryQuarter = function(props) {
  // console.log('Quarter -- props.highLight: ', props.highLight);

  return (
    <div className={"col-6 quarter" + " pos" + props.position}>
      <img
        className="img-fluid"
        className={props.highLight ? 'img-fluid' : 'img-fluid overlay-img'}
        data-position={props.position}
        onMouseOver={props.hoverOn}
        onMouseOut={props.hoverOff}
        src={props.image}
        onClick={props.handleImageClickShowCarousel}
      />
    </div>
  );
};
export default GalleryQuarter;