import React from 'react';
import Squarepip from './Squarepip.jsx';

const Indicator = function(props) {
  return (
    <div className="indicator">
      <div className="wrapper">
        {props.images.map(function (image, index) {
          return <Squarepip
            image={image.fileName}
            key={index}
            index={index}
            highLight={props.highLight[index].value}
            handleClickedSquare={props.handleClickedSquare}
            // hoverOnSlide={props.hoverOnSlide}
            // hoverOffSlide={props.hoverOffSlide}
          />;
        })}
      </div>
    </div>
  );
};

export default Indicator;