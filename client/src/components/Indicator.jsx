import React from 'react';
import Squarepip from './Squarepip.jsx';

const Indicator = function(props) {

  return <div className="indicator">
    <div className={props.showPhotoList ? 'wrapper_1 slide-up' : 'wrapper_1 slide-down'}>
      <div className="outside-wrapper">
        <div className="wrapper_2_left">
          <span>{props.currentImageIndex + 1}</span><span>/</span><span>{props.numOfImages}: </span>
          <span>Great San Francisco Location</span><br />
          <span style={{opacity: '0.5'}}><em>Verified Photo</em></span><span></span>
        </div>

        <div className="wrapper_2">
          <span
            className={props.showPhotoList ? 'showPhotoList' : 'hidePhotoList'}
            onClick={props.handleHidePhotoList}><span className='hide-show-text'>Hide Photo List</span><i className="fa fa-caret-down"></i></span>
          <span
            className={props.showPhotoList ? 'hidePhotoList' : 'showPhotoList'}
            onClick={props.handleShowPhotoList}><span className='hide-show-text'>Show Photo List</span>
            <i className="fa fa-caret-up"></i></span>
        </div>
      </div>

      <div className="wrapper">
        {props.images.map(function(image, index) {
          return <Squarepip image={image.fileName} key={index} index={index} highLight={props.highLight[index].value} handleClickedSquare={props.handleClickedSquare} />;
        })}
      </div>
    </div>
  </div>;
};

export default Indicator;