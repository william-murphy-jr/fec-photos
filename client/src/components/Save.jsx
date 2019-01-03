import React from 'react';

const Save = function(props) {
  return (
    <div className={props.showSave ? 'share-overlay show-share-overlay' : 'share-overlay hide-share-overlay'}>
      <div className={props.showSave ? ' share show-share' : 'share hide-share'}>
        <ul className='share-list-style'>
          <li className='share-close'
            onClick={props.handleCloseSave}>
            <span>&times;</span>
          </li>
          <li>
            <h5 className='save-title'>Save to List</h5>
          </li>
          <li className='save-item-facebook'>
            <button>
              <i className="fab fa-facebook-f"></i>
              <a href="https://www.facebook.com" target="_blank">Continue with Facebook</a>
            </button>
          </li>
          <li className='save-item-google'>
            <button>
              <i className='fab fa-google'></i>
              <a href="https://www.google.com" target="_blank">Continue with Google</a>
            </button>          
          </li>
          <li className='share-item-or-text'>
            <span>or</span>
          </li>
          <li className='save-item-email'>
            <button>
              <i className="fas fa-envelope"></i>
              <a href="mailto:" target="_blank">Sign up with Email</a>
            </button>
          </li>
          <li className='save-item-login'>
            <button>
              <span>All ready have an account <a href="#" target="_blank">Login</a>
              </span>
            </button>
          </li>
          <li className='save-item-location'>
            <div className="container-fluid">
              <div className="row">
                <div className="col-5">
                  <img className="image-fluid" src={props.image0} alt="location" style={{maxWidth: '100%'}}/>
                </div>
                <div className="col-7">
                  <p className="save-description-title">Great Castro Location</p>
                  <p className="save-description">San Fransico, CA, United States</p>
                  <p>
                    <span className="save-stars">&#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;</span>
                    <span className="save-reviews">413 Reviews</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Save;