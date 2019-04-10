import React, { Component } from "react"
import Slider from "react-slick"
import { Media } from 'reactstrap';

import "./../style/slick.css"
import "./../style/slick-theme.css"

export default class SimpleSlider extends Component {

  render() {
    if (!this.props.images) {
      return <div />
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div  style={{ margin: '10px', paddingBottom: '100px' }}>
        <Slider {...settings}>
          {this.props.images.map(entrie => (
            <div>
              <Media>
                <Media body>
                  <img src={entrie} width={'100%'} height={'170px'} alt="" />
                </Media>
              </Media>
              
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
