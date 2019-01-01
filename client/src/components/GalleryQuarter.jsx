import React from 'react';
import ShareSaveBtns from './ShareSaveBtns.jsx';
import ViewPhotosBtn from './ViewPhotosBtn.jsx';

const GalleryQuarter = function(props) {
  // console.log('Quarter -- props.highLight: ', props.highLight);
  let position = props.position;
  // console.log('props.position: ANY *** ', props.position); 

  if (position == '2') { 
    console.log('props.position: ', props.position); 
    return (
      <div className={'col-6 quarter' + ' pos' + props.position}>
        <ShareSaveBtns position={props.position} 
          highLight={position.highLight}
          hoverOff={props.hoverOff}
          hoverOn={props.hoverOn}
          image={props.image}
          handleImageClickShowCarousel={props.handleImageClickShowCarousel}
        />
        <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
      </div>
    );
  } else if (position == '4') {
    console.log('position: ', position);
    return ( 
      <div className={'col-6 quarter' + ' pos' + props.position}>
        <ViewPhotosBtn position={props.position} highLight={position.highLight}/>
        <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
      </div>
    );
  } else {
    console.log('props.position: ', props.position); 
    return (
      <div className={'col-6 quarter' + ' pos' + props.position}>
        <img className={props.highLight ? 'img-fluid img-gallery-qtr' : 'img-fluid img-gallery-qtr overlay-img'} data-position={props.position} onMouseOver={props.hoverOn} onMouseOut={props.hoverOff} src={props.image} onClick={props.handleImageClickShowCarousel} />
      </div>
    );
  }
};

export default GalleryQuarter;