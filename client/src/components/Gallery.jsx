import React from 'react';
import GalleryHalf from './GalleryHalf.jsx';
import GalleryQuarter from './GalleryQuarter.jsx';
import Carousel from '../components/Carousel.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      highLight: [{ 'value': true },
        { 'value': true }, { 'value': true },
        { 'value': true }, { 'value': true }],
      showCarousel: false,
      currentImageIndex: 0,
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.handleImageClickShowCarousel = this.handleImageClickShowCarousel.bind(this);
    this.handleImageClickHideCarousel = this.handleImageClickHideCarousel.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method: 'GET',
      url: 'http://localhost:9999/gallery'
    }).done(function(data) {
      console.log(data);
      console.log('data[0].fileName: ', data[0].fileName);
      // alert('Returned Data Saved: ' + data);
      self.setState({ images: data });
    });
  }

  hoverOn(e) {
    // console.log(' ** hoverOn ** ');
    let targetPos = +e.target.dataset.position;

    let hl = [{ 'value': false }, { 'value': false }, { 'value': false }, { 'value': false }, { 'value': false }];
    for (var i = 0; i < 5; i++) {
      if (targetPos === i) {
        hl.splice(i, 1, {'value': true});
        this.setState({highLight: hl});
      } 
    } 
  }
  
  hoverOff(e) {
    // console.log('hoverOff');
    // reset all
    this.setState({ highLight:
      [{ 'value': true },{ 'value': true },
        { 'value': true }, { 'value': true }, { 'value':true }]
    });
  }

  handleImageClickShowCarousel(e) {
    console.log('Image clicked: ', e.target);
    this.setState({showCarousel: true});
  }
  
  handleImageClickHideCarousel(e) {
    console.log('Carousel close X clicked: ', e.target);
    this.setState({showCarousel: false});
  }

  previousSlide(e) {
    console.log('PreviousSlide e.target', e.target);
    const lastIndex = this.state.images.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex -1;

    this.setState({currentImageIndex: index});
  }

  nextSlide(e) {
    console.log('NextSlide e.target', e.target);
    const lastIndex = this.state.images.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }



  render() {

    
    if (this.state.images.length) {

      console.log('this.state.images:' , this.state.images);
      console.log('this.state.images:' , this.state.images[this.state.currentImageIndex]);
      console.log('this.state.currentImageIndex :' , this.state.currentImageIndex);
      console.log('this.state.images[this.state.currentImageIndex].fileName:' , this.state.images[this.state.currentImageIndex].fileName);
      
      let image0 = this.state.images[0].fileName.trim();
      let image1 = this.state.images[1].fileName;
      let image2 = this.state.images[2].fileName.trim();
      let image3 = this.state.images[7].fileName.trim();
      let image4 = this.state.images[4].fileName.trim();

      return (
        <div className="container-fluid" style={{ marginLeft: '0px' }}>
          <Carousel
            showCarousel={this.state.showCarousel}
            hideCarousel={this.state.hideCarousel}
            handleImageClickHideCarousel={this.handleImageClickHideCarousel}
            nextSlide={this.nextSlide}
            previousSlide={this.previousSlide}
            images={this.state.images}
            currentImageIndex={this.state.currentImageIndex}
          />
          <div className="row">
            <GalleryHalf
              image={image0}
              position={0}
              hoverOn={this.hoverOn}
              hoverOff={this.hoverOff}
              highLight={this.state.highLight[0].value}
              handleImageClickShowCarousel={this.handleImageClickShowCarousel}
            />
            <div className="col-6">
              <div className="row">
                <GalleryQuarter
                  image={image1}
                  position={1}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight={this.state.highLight[1].value}
                  handleImageClickShowCarousel={this.handleImageClickShowCarousel}
                />
                <GalleryQuarter
                  image={image2}
                  position={2}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight={this.state.highLight[2].value}
                  handleImageClickShowCarousel={this.handleImageClickShowCarousel}
                />
              </div>
              <div className="row">
                <GalleryQuarter
                  image={image3}
                  position={3}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight={this.state.highLight[3].value}
                  handleImageClickShowCarousel={this.handleImageClickShowCarousel}
                />
                <GalleryQuarter
                  image={image4}
                  position={4}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight={this.state.highLight[4].value}
                  handleImageClickShowCarousel={this.handleImageClickShowCarousel}
                />
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
