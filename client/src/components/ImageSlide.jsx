import React from 'react';

const ImageSlide = (props) => {
  const styles = {
    position: 'fixed',
    height: '70%',
    width: '50%',
    top: '11.5%',
    left: '25%',
    right: '0',
    bottom: '0',
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles} >
    </div>
  );
};

export default ImageSlide;