import React from "react";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };

  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/gallery"
    }).done(function(data) {
      console.log(data);
      console.log("data[0].fileName: ", data[0].fileName);
      // alert('Returned Data Saved: ' + data);
      self.setState({ images: data });
      console.log("self.state.images: ", self.state.images);
      console.log("self.state.images[0].fileName: ", self.state.images[0].fileName
      );
    });
  }


  render() {

    if (this.state.images.length) {
      return (
        <div className="container-fluid" style={{ marginLeft: '0px' }}>
          <div className="row">
            <div className="col-6 half">
              <img
                class="img-fluid"
                src={this.state.images[0].fileName + '/city'} 
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src={this.state.images[1].fileName + '/fashion'}
                  />
                </div>
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src={this.state.images[2].fileName + '/food'}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src={this.state.images[3].fileName + '/transportation'}
                  />
                </div>
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src={this.state.images[4].fileName + '/nightlife'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid" style={{ marginLeft: '0px' }}>
          <div className="row">
            <div className="col-6 half">
              <img
                class="img-fluid"
                src="http://lorempixel.com/800/225/transport"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src="http://lorempixel.com/800/225/transport"
                  />
                </div>
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src="http://lorempixel.com/800/225/city"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src="http://lorempixel.com/800/225/fashion"
                  />
                </div>
                <div className="col-6 quarter">
                  <img
                    class="img-fluid"
                    src="http://lorempixel.com/800/225/people"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Gallery;
