import React from 'react';
import GalleryHalf from './GalleryHalf.jsx';

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
      let theImage = self.state.images[0].fileName.trim() + '/city';
      // console.log('with trim url +  \' /city\' = theImage:  ' , theImage);
    });
  }


  render() {

    if (this.state.images.length) {
      
      let image0 = this.state.images[0].fileName.trim() + '/city';
      let image1 = this.state.images[0].fileName.trim() + '/fashion';
      let image2 = this.state.images[0].fileName.trim() + '/food';
      let image3 = this.state.images[0].fileName.trim() + '/transport';
      let image4 = this.state.images[0].fileName.trim() + '/nightlife';

      return (
        <div className="container-fluid" style={{ marginLeft: '0px' }}>
          <div className="row">
            <GalleryHalf image0={image0} />
            <div className="col-6">
              <div className="row">
                <div className="col-6 quarter">
                  <img
                    className="img-fluid"
                    src={ image1}
                  />
                </div>
                <div className="col-6 py-5 quarter">
                  <img
                    className="img-fluid"
                    src={ image2 }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 px-5 quarter">
                  <img
                    className="img-fluid"
                    src={ image3}
                  />
                </div>
                <div className="col-6 px-5 quarter">
                  <img
                    className="img-fluid"
                    src={ image4 }
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
                className="img-fluid"
                src="http://lorempixel.com/1200/650/transport"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6 quarter">
                  <img
                    className="img-fluid"
                    src="http://lorempixel.com/1200/650/transport"
                  />
                </div>
                <div className="col-6 quarter">
                  <img
                    className="img-fluid"
                    src="http://lorempixel.com/1200/650/city"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 quarter">
                  <img
                    className="img-fluid"
                    src="http://lorempixel.com/1200/650/fashion"
                  />
                </div>
                <div className="col-6 quarter">
                  <img
                    className="img-fluid"
                    src="http://lorempixel.com/1200/650/people"
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
