import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "../CSS/bannersSlider.css";

import banner1 from "../resources/images/banner1.png";
import banner2 from "../resources/images/banner2.png";
import banner3 from "../resources/images/banner3.png";

class BannersSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} className="dots" />;
      },
    };

    return (
      <Slider className="slider" {...settings}>
        <div className="bannerImage">
          <img src={banner1} alt="banner" />
        </div>
        <div className="bannerImage">
          <img src={banner2} alt="banner" />
        </div>
        <div className="bannerImage">
          <img src={banner3} alt="banner" />
        </div>
      </Slider>
    );
  }
}

export default BannersSlider;
