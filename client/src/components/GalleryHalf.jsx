import React from 'react';

const GalleryHalf = function (props) {
  console.log('props.image0: ', props.image0);

  return (
    <div className="col-6 half">
      <img
        className="img-fluid"
        src={props.image0}
      />
    </div>
  );
};

export default GalleryHalf;