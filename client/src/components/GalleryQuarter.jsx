import React from 'react';

const GalleryQuarter = function(props) {

  return (
    <div className="col-6 quarter">
      <img
        className="img-fluid"
        onMouseOver={props.hoverOn}
        onMouseOut={props.hoverOff}
        src={props.image}
      />
    </div>
  );
}
export default GalleryQuarter;