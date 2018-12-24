import React from 'react';
import GalleryHalf from './GalleryHalf.jsx';
import GalleryQuarter from './GalleryQuarter.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      highLight: true,
      overLay: false,
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);

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

  hoverOn(e) {
    console.log('hoverOn');
    this.setState({highLight: true});
  }
  
  hoverOff(e) {
    console.log('hoverOff');
    this.setState({ highLight: false });
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
            <GalleryHalf image0={image0} hoverOn={this.hoverOn} hoverOff={this.hoverOff} />
            <div className="col-6">
              <div className="row">
                <GalleryQuarter image={image1} hoverOn={this.hoverOn} hoverOff={this.hoverOff} />
                <GalleryQuarter image={image2} hoverOn={this.hoverOn} hoverOff={this.hoverOff} />
              </div>
              <div className="row">
                <GalleryQuarter image={image3} hoverOn={this.hoverOn} hoverOff={this.hoverOff} />
                <GalleryQuarter image={image4} hoverOn={this.hoverOn} hoverOff={this.hoverOff} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid" style={{ marginLeft: "0px" }}>
          <div className="row">
            <GalleryHalf image={"http://lorempixel.com/1200/650/transport"} />            
            <div className="col-6">
              <div className="row">
                <GalleryQuarter image={"http://lorempixel.com/1200/650/transport"} />
                <GalleryQuarter image={"http://lorempixel.com/1200/650/city"} />
              </div>
              <div className="row">
                <GalleryQuarter image={"http://lorempixel.com/1200/650/fashion"} />
                <GalleryQuarter image={"http://lorempixel.com/1200/650/people"} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Gallery;
