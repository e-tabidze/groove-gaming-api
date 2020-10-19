import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "../CSS/bannersSlider.css";

import banner1 from "../resources/images/banner1.png";
import banner2 from "../resources/images/banner2.png";
import banner3 from "../resources/images/banner3.png";

const TestSlider = () => {
  const banners = [{ image: banner1 }, { image: banner2 }, { image: banner3 }];

  const [index, setIndex] = useState(0);
  const [elementToShow, setElementToShow] = useState(null);

  useEffect(() => {
    handleElementChange();
    return () => {
      setIndex(0);
    };
  }, []);

  useEffect(() => {
    handleElementChange();
  }, [index]);

  useEffect(() => {
    console.log(index);
  }, [index]);

  const handleElementChange = async () => {
    await setElementToShow(banners[index]);
  };

  const goLeft = () => {
    console.log(index);
    let nextIndex = index + 1;
    setIndex(nextIndex);
  };

  const goRight = () => {
    console.log(index);
    let nextIndex = index - 1;
    setIndex(nextIndex);
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    },
  };



  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  

  return (
    <div className="sliderContainer" >
      <Slider {...settings} style={{ width: "100%" }}>
        {banners &&
          banners.map((banner) => (
            <div className="sliderComponent" key={banner.index}>
              <img className="bannerImage" src={banner.image} />
            </div>
          ))}
      </Slider>
      <div>Hello World</div>
      <button id="goLeft" onClick={goLeft}>
        Left
      </button>
      <button id="goRight" onClick={goRight}>
        Right
      </button>
    </div>
  );
};

export default TestSlider;
