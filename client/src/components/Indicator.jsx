import React from 'react';
import Squarepip from './Squarepip.jsx';

const Indicator = function(props) {
  return (
    <div className="indicator">
      <div className="wrapper">
        {props.images.map(function (image, index) {
          return <Squarepip image={image.fileName} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Indicator;