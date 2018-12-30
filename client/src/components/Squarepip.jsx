import React from 'react';

const Squarepip = function(props) {
  return (
    <div className='squarepip'>
      <img className={props.highLight ? 'pipImage' : 'pipImage overlay-img2' }
        data-position={props.index}
        src={props.image}
        style={{width: '65px', height: '40px', margin: '5px'}}
        onClick={props.handleClickedSquare}
      />
    </div>
  );
};

export default Squarepip;