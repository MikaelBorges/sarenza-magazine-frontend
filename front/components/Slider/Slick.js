import React from "react";
import Slider from "react-slick";

const Slick = ({ items, renderItem }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <Slider {...settings}>{items.map(i => renderItem(i, 180))}</Slider>
    </div>
  );
};

Slick.propTypes = {};

export default Slick;
