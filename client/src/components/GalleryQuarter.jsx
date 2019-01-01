import React from 'react';
import ShareSaveBtns from './ShareSaveBtns.jsx'

const GalleryQuarter = function(props) {
  // console.log('Quarter -- props.highLight: ', props.highLight);

  if(props.position == '2') { 
    console.log('props.position: ', props.position); 
    return (
      <ShareSaveBtns />
  } else {
    return (
      <div className={'col-6 quarter' + ' pos' + props.position}>
        <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
      </div>);
  }

  // }

};

export default GalleryQuarter;