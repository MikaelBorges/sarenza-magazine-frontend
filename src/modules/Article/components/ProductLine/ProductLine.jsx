import React from 'react';
import Slider from 'react-slick';
import styles from './ProductLine.module.scss';
import ProductCards from './ProductCards/ProductCards';

const ProductLine = ({ ProductCard }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 975,
        settings: 'unslick'
      }
    ]
  };

  return (
    <div className={styles.productLine}>
      <div className={styles.SliderContainer}>
        <Slider {...settings} className={styles.cards}>
          {ProductCard.map((card) => {
            if (card.url_image) {
              return <ProductCards {...card} key={card.pcid} />;
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductLine;
