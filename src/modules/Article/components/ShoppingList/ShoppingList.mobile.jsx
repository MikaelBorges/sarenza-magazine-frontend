import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

import ShoppingCard from './ShoppingCard/ShoppingCard';
import styles from './ShoppingList.mobile.module.scss';

const ShoppingList = ({ vignette, title, description, button }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 975,
        settings: 'unslick'
      }
    ]
  };
  return (
    <div className={styles.shoppingList_mobile}>
      <h2 className="title-edito2">{title}</h2>
      <p className={styles.intro}>{description}</p>
      <div className={styles.SliderContainer}>
        <Slider {...settings} className={styles.cards}>
          {vignette.map((card) => {
            return <ShoppingCard {...card} key={card.pcid} />;
          })}
        </Slider>
      </div>
      {button !== null ? (
        <button type="button" className={`button ${styles.buttonShoppingList_mobile}`} href={button.link}>
          {button.label}
        </button>
      ) : null}
    </div>
  );
};

ShoppingList.propTypes = {
  ShoppingCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardImage: PropTypes.string
    })
  ),
  title: PropTypes.string,
  intro: PropTypes.string,
  textButton: PropTypes.string,
  urlButton: PropTypes.string
};

ShoppingList.defaultProps = {
  ShoppingCards: [],
  title: '',
  intro: '',
  textButton: '',
  urlButton: ''
};

export default ShoppingList;
