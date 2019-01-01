import React from 'react';

const ShareSaveBtns = function(props) {
  return (
      <div className='share-save'>
        <button className="galleryQtrBtn">
          <i className='far fa-share-square share'></i>
          <span className="galleryQtrBtnTxt">
            <span className='innerGalleryQtrBtnTxt'>Share</span>
          </span>
        </button>
        <button className="galleryQtrBtn">
          <i className="far fa-heart save"></i>
          <span className="galleryQtrBtnTxt">Save</span>
        </button>
      </div>
  );
};

export default ShareSaveBtns;