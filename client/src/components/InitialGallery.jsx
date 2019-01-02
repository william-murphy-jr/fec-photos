import React from 'react';
import GalleryHalf from './GalleryHalf.jsx';
import GalleryQuarter from './GalleryQuarter.jsx';

const InitialLoad = function(props) {
  return (
    <div className="row">
      <GalleryHalf image={'images/Loading_icon.gif'} />
      <div className="col-6">
        <div className="row">
          <GalleryQuarter image={'images/Loading_icon.gif'} />
          <GalleryQuarter image={'images/Loading_icon.gif'} />
        </div>
        <div className="row">
          <GalleryQuarter image={'images/Loading_icon.gif'} />
          <GalleryQuarter image={'images/Loading_icon.gif'} />
        </div>
      </div>
    </div>
  );
};

export default InitialLoad;