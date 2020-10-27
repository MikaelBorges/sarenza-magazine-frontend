import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

import ShoppingCard from './ShoppingCard/ShoppingCard';
import styles from './ShoppingList.module.scss';

const ShoppingList = ({ ShoppingCards, title, intro, textButton, urlButton }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 975,
        settings: 'unslick'
      }
    ]
  };
  return (
    <div className={styles.shoppingList}>
      <h2 className="title-edito2">{title}</h2>
      <p className={styles.intro}>{intro}</p>
      <div className={styles.SliderContainer}>
        <Slider {...settings} className={styles.cards}>
          {ShoppingCards.map((card) => {
            return (
              <ShoppingCard
                cardImage={card.cardImage}
                stateLabel={card.stateLabel}
                titleProduct={card.titleProduct}
                descriptionProduct={card.descriptionProduct}
                urlProduct={card.urlProduct}
                pcid={card.pcid}
                key={card.pcid}
              />
            );
          })}
        </Slider>
      </div>
      <button type="button" className={`button ${styles.buttonShoppingList}`} href={urlButton}>
        {textButton}
      </button>
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
