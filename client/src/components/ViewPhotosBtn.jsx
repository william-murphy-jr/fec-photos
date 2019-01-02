import React from 'react';

const ViewPhotosBtn = function(props) {
  console.log('props.moveViewPhotosBtn: ', props.moveViewPhotosBtn);
  return (
    // <div className={'col-6 quarter' + ' pos' + props.position}>
      <div className={props.moveViewPhotosBtn ? 'view-photos-btn move-view-photos-btn' : 'view-photos-btn'}>
        <button className="galleryQtrBtn">
          <span className="galleryQtrBtnTxt">View Photos</span>
        </button>
      </div>
      // <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
    // </div>
  );
};

export default ViewPhotosBtn;