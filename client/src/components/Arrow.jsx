import React from 'react';

const Arrow = function(props) {

  return (
    <div
      className={`slide-arrow ${props.direction}`}
      onClick={props.clickFunction}>
      {props.glyph}
    </div>
  );
};
export default Arrow;