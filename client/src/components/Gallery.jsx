import React from 'react';
import GalleryHalf from './GalleryHalf.jsx';
import GalleryQuarter1 from './GalleryQuarter1.jsx';
import GalleryQuarter2 from './GalleryQuarter2.jsx';
import GalleryQuarter3 from './GalleryQuarter3.jsx';
import GalleryQuarter4 from './GalleryQuarter4.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      highLight: [{ 'value': true }, { 'value': true }, { 'value': true }, { 'value': true }, { 'value':true}],
      highLight0: true,
      highLight1: true,
      highLight2: true,
      highLight3: true,
      highLight4: true,
      overLay: false,
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/gallery'
    }).done(function(data) {
      console.log(data);
      console.log('data[0].fileName: ', data[0].fileName);
      // alert('Returned Data Saved: ' + data);
      self.setState({ images: data });
      let theImage = self.state.images[0].fileName.trim() + '/city';
      console.log('*** self.state.highLight: ***', self.state.highLight);
      // console.log('with trim url +  \' /city\' = theImage:  ' , theImage);
    });
  }

  hoverOn(e) {
    console.log(' ** hoverOn ** ');
    // console.log('e: ', e);
    // console.log('e.target: ', e.target);
    let targetPos = +e.target.dataset.position;
    console.log('Before state change this.state.highLight[4]: ', this.state.highLight[4]);

    let hl = [{ 'value': false }, { 'value': false }, { 'value': false }, { 'value': false }, { 'value': false }];
    for (var i = 0; i < 5; i++) {
      // let highLight = 'hightLight' + i;
      // let highLightTarget = {};
      if (targetPos === i) {
        hl.splice(i, 1, {'value': true});
        // highLightTarget[highLight] = true;
        console.log('hl: ', hl);
        this.setState({highLight: hl});
        console.log('AFTER this.state.highLight: ', this.state.highLight);

      } 
      // else {
      //   highLightTarget[highLight] = false;
      //   this.setState({highLightTarget: []);
      //   console.log('false: ', highLightTarget);
      //   console.log('this.state.highLight1: ', this.state.highLight1);
      // }
    } 


    // for (var i = 0;i < 5;i++) {
    //   let highLight = 'hightLight' + i;
    //   let highLightTarget = {};
    //   if (targetPos === i) {
    //     highLightTarget[highLight] = true; 
    //     console.log('highLightTarget: ', highLightTarget);
    //     this.setState(highLightTarget);  
    //     console.log('this.state.highLight0: ', this.state.highLight0);

    //   } else {
    //     highLightTarget[highLight] = false;
    //     this.setState(highLightTarget);
    //     console.log('false: ', highLightTarget);
    //     console.log('this.state.highLight1: ', this.state.highLight1);
    //   }
    // } 
  }
  
  hoverOff(e) {
    console.log('hoverOff');
    // console.log('e: ', e);
    // console.log("e.target.dataset: ", e.target.dataset);
    // console.log("e.target.dataset.position: ", e.target.dataset.position);
    this.setState({ highLight:
      [{ 'value': true },{ 'value': true },
        { 'value': true }, { 'value': true }, { 'value':true }]
    });
  }


  render() {

    if (this.state.images.length) {
      
      let image0 = this.state.images[0].fileName.trim() + '/city';
      let image1 = this.state.images[1].fileName.trim() + '/fashion';
      let image2 = this.state.images[2].fileName.trim() + '/food';
      let image3 = this.state.images[3].fileName.trim() + '/transport';
      let image4 = this.state.images[4].fileName.trim() + '/nightlife';

      console.log("this.state.highLight: ", this.state.highLight);
      // console.log("this.state.highLight[0].value: ", this.state.highLight[0].value);

      return (
        <div className="container-fluid" style={{ marginLeft: '0px' }}>
          <div className="row">
            <GalleryHalf
              image={image0}
              position={0}
              hoverOn={this.hoverOn}
              hoverOff={this.hoverOff}
              highLight={this.state.highLight[0].value}
            />

            <div className="col-6">
              <div className="row">
                <GalleryQuarter1
                  image={image1}
                  position={1}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight1={this.state.highLight[1].value}
                />
                <GalleryQuarter2
                  image={image2}
                  position={2}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight2={this.state.highLight[2].value}
                />
              </div>
              <div className="row">
                <GalleryQuarter3
                  image={image3}
                  position={3}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight3={this.state.highLight[3].value}
                />
                <GalleryQuarter4
                  image={image4}
                  position={4}
                  hoverOn={this.hoverOn}
                  hoverOff={this.hoverOff}
                  highLight4={this.state.highLight[4].value}
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
                <GalleryQuarter1 image={"http://lorempixel.com/1200/650/transport"} />
                <GalleryQuarter2 image={"http://lorempixel.com/1200/650/city"} />
              </div>
              <div className="row">
                <GalleryQuarter3 image={"http://lorempixel.com/1200/650/fashion"} />
                <GalleryQuarter4 image={"http://lorempixel.com/1200/650/people"} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Gallery;
