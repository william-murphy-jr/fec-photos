import React from "react";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="container-fluid" style={{ marginLeft: "0px" }}>
      <div className="row">
        <div className="col-6 half">
          <img class="img-fluid" src="http://lorempixel.com/800/225/nightlife" />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 quarter">
              <img class="img-fluid" src="http://lorempixel.com/800/225/transport" />
            </div>
            <div className="col-6 quarter">
              <img class="img-fluid" src="http://lorempixel.com/800/225/city" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 quarter">
              <img class="img-fluid" src="http://lorempixel.com/800/225/fashion" />
            </div>
            <div className="col-6 quarter">
              <img class="img-fluid" src="http://lorempixel.com/800/225/people" />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
export default Gallery;
