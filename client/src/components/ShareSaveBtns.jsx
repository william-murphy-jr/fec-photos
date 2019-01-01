import React from 'react';

const ShareSaveBtns = function(props) {
  return (
    <div className={'col-6 quarter' + ' pos' + props.position}>
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
      <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
    </div>
  );
};

export default ShareSaveBtns;