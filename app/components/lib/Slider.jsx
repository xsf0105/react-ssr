import React from 'react'
import Slider from 'react-slick'

export default React.createClass({
  render: function () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false
    };
    return (
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
        </Slider>
    );
  }
});