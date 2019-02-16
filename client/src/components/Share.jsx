import React from 'react';

const Share = function(props) {
  return (
    <div className={props.showShare ? 'share-overlay show-share-overlay' : 'share-overlay hide-share-overlay'}>
      <div className={props.showShare ? ' share show-share' : 'share hide-share'}>
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
          <li className='share-item'>
            <i className="fa fa-facebook-f"></i>
            <a href="https://www.facebook.com" target="_blank">Facebook</a></li>
          <li className='share-item'>
            <i className='fa fa-twitter'></i>
            <a href="https://www.twitter.com" target="_blank">Twitter</a></li>
          <li className='share-item'>
            <i className="fa fa-envelope"></i>
            <a href="mailto:" target="_blank">Email</a></li>
          <li className='share-item'>
            <i className="fa fa-bolt"></i>
            <a href="https://www.messenger.com" target="_blank">Messenger</a></li>
          <li className='share-item'>
            <i className='fa fa-copy'></i>
            <a href="#" target="_blank">Copy Link</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Share;