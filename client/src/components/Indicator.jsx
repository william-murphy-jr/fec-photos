import React from 'react';
import Squarepip from './Squarepip.jsx';

const Indicator = function(props) {
  console.log("props.showPhotoList: ", props.showPhotoList);
  return <div className="indicator">
    <div className={props.showPhotoList ? 'wrapper_1 slide-up' : 'wrapper_1 slide-down'}>
      <div className="wrapper_2">
        <span
          className={props.showPhotoList ? 'showPhotoList' : 'hidePhotoList'}
          onClick={props.handleHidePhotoList}><span className='hide-show-text'>Hide Photo List</span><i className="fas fa-caret-down"></i></span>
        <span
          className={props.showPhotoList ? 'hidePhotoList' : 'showPhotoList'}
          onClick={props.handleShowPhotoList}><span className='hide-show-text'>Show Photo List</span>
          <i className="fas fa-caret-up"></i></span>
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