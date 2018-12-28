import React from 'react';

const Arrow = function(props) {
  return (
    <div
      className={`slide-arrow ${props.direction}`}
      onClick={props.clickFunction}>
      <i className={props.direction === 'right' ? 'fa fa-angle-right' : 'fa fa-angle-left'}></i>
    </div>
  );
};

export default Arrow;