import React from 'react';
import ShareSaveBtns from './ShareSaveBtns.jsx';
import ViewPhotosBtn from './ViewPhotosBtn.jsx';

const GalleryQuarter = function(props) {
  let position = props.position;

  if (position === 2) { 
    return (
      <div className={'col-6 quarter' + ' pos' + props.position}>
        <ShareSaveBtns
          handleClickedShare={props.handleClickedShare}
          handleClickedSave={props.handleClickedSave}
        />
        <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
      </div>
    );
  } else if (position === 4) {
    return ( 
      <div className={'col-6 quarter' + ' pos' + props.position}>
        <ViewPhotosBtn 
          onClick={props.handleImageClickShowCarousel}
          moveViewPhotosBtn={props.moveViewPhotosBtn}
          position={props.position}
          handleImageClickShowCarousel={props.handleImageClickShowCarousel}
        />
        <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
      </div>
    );
  } else {
    return (
      <div className={'col-6 quarter' + ' pos' + props.position}>
        <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
      </div>
    );
  }
};

export default GalleryQuarter;