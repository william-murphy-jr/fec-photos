import React from 'react';
import ShareSaveBtns from './ShareSaveBtns.jsx'

const GalleryQuarter = function(props) {
  // console.log('Quarter -- props.highLight: ', props.highLight);

  if(props.position == '2') { 
    console.log('props.position: ', props.position); 
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
    </div>);
  } else {
  return (
    <div className={'col-6 quarter' + ' pos' + props.position}>
      <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
    </div>);
  }

  // }

};

export default GalleryQuarter;