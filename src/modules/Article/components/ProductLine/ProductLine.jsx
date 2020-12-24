import React from 'react';
import Image from '@/components/commons/Image/Image';
import Slider from 'react-slick';

import styles from './ProductLine.module.scss';
const ProductLine = ({ ProductCard }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 975,
        settings: 'unslick'
      }
    ]
  };
  return (
    <div className={styles.SliderContainer}>
      <Slider {...settings} className={styles.cards}>
        {ProductCard.map((product) => {
          return (
            <div className="fdsfd">
              <Image src={product.url_image} alt="Photo" />
            </div>
          );
        })}
      </Slider>
      {}
    </div>
  );
};

export default ProductLine;
