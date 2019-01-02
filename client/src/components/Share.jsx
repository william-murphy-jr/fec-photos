import React from 'react';

const Share = function(props) {
  console.log('props.showShare: ', props.showShare);
  return <div className={props.showShare ? ' share show-share' : 'share hide-share'}>
    <ul className='share-list-style'>
      <li className='share-close'
        onClick={props.handleCloseShare}>
        <span>&times;</span>
      </li>
      <li>
        <h3 className='share-title'>Share</h3>
        Check out this awesome listing on the BestBnb Great Castro
        location - Apartments for Rent in San Francisco
      </li>
      <li className='share-item'><i className="fab fa-facebook-f"></i>Facebook</li>
      <li className='share-item'><i className='fab fa-twitter'></i>Twitter</li>
      <li className='share-item'><i className="fas fa-envelope"></i>Email</li>
      <li className='share-item'><i className="fab fa-facebook-messenger"></i>Messenger</li>
      <li className='share-item'><i className='fas fa-copy'></i>Copy Link</li>
      <li className='share-item'><i className='fas fa-code'></i>Embed</li>
    </ul>
  </div>;
};

export default Share;