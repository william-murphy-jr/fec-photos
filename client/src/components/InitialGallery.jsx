import React from 'react';
import GalleryHalf from './GalleryHalf.jsx';
import GalleryQuarter from './GalleryQuarter.jsx';

const InitialLoad = function(props) {
  return (
    <div className="row">
      <GalleryHalf image={'images/front_demo_max1500_30282543-181023.jpg'} />
      <div className="col-6">
        <div className="row">
          <GalleryQuarter image={'images/interior-01-MonticelloHomes_Kitchen.fffd394c.fill-1200x650.png'} />
          <GalleryQuarter image={'images/interior-02-16_7891116_63183_Bpo-63183-116-1-1200x650.jpg'} />
        </div>
        <div className="row">
          <GalleryQuarter image={'images/interior-03-Jackie-Tompkins-LakeHouseDinLR1-1200x650.png'} />
          <GalleryQuarter image={'images/interior-04-Jackie-Tompkins-TreeHouseKitchen1-1200x650.png'} />
        </div>
      </div>
    </div>
  );
};

export default InitialLoad;