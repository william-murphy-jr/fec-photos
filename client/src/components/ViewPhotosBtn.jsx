import React from 'react';

const ViewPhotosBtn = function(props) {

  return (
    <div className={props.moveViewPhotosBtn ? 'view-photos-btn move-view-photos-btn' : 'view-photos-btn'}>
      <button className="galleryQtrBtn"
        data-position={props.position}
        onClick={props.handleImageClickShowCarousel}>
        <span className="galleryQtrBtnTxt" data-position={props.position}>View Photos</span>
      </button>
    </div>
  );
};

export default ViewPhotosBtn;