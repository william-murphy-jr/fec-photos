import React from 'react';

const Squarepip = function(props) {
  // console.log('props.index: ', props.index);
  return (
    <div className='squarepip'>
      <img src={props.image} style={{ width: '65px', height: '25px', margin: '5px'}}/>
    </div>
  );
};

export default Squarepip;