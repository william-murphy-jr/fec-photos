import React from 'react';

const GalleryQuarter = function(props) {

  return (
    <div className="col-6 quarter">
      <img
        className="img-fluid"
        src={props.image}
      />
    </div>
  );
}
export default GalleryQuarter;