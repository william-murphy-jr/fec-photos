import React from 'react';
import Arrow from './Arrow.jsx';

const ImageSlide = (props) => {
  const styles = {
    position: 'fixed',
    height: '70%',
    width: '50%',
    top: '12.5%',
    left: '25%',
    right: '0',
    bottom: '0',
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  // console.log('props.url: ', props.url);

  return (
    <div className="image-slide" style={styles} >
    </div>
  );
};
export default ImageSlide;