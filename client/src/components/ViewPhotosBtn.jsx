import React from 'react';

const ViewPhotosBtn = function(props) {
  
  return (
    <div className={props.moveViewPhotosBtn ? 'view-photos-btn move-view-photos-btn' : 'view-photos-btn'}>
      <button className="galleryQtrBtn">
        <span className="galleryQtrBtnTxt">View Photos</span>
      </button>
    </div>
  );
};

export default ViewPhotosBtn;