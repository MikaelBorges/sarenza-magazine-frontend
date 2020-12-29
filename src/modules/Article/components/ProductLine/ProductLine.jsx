import React from 'react';
import Image from '@/components/commons/Image/Image';
import Slider from 'react-slick';

import styles from './ProductLine.module.scss';
const ProductLine = ({ ProductCard }) => {
  console.log(ProductCard);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    paddingCenter: true,

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
        {ProductCard.map((card) => {
          console.log('ProductLine -> ProductCard', ProductCard);
          return (
            <div className={styles.card}>
              <Image src={card.url_image} alt="Photo" />
              <a className={styles.btn} href={card.url_cta}>
                Voir le produit
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductLine;
