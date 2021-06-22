import PropTypes from 'prop-types';
import React, {useRef} from 'react';
import Slider from 'react-slick';

import ShoppingCard from './ShoppingCard/ShoppingCard';
import styles from './ShoppingList.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';



const ShoppingList = ({ vignette, title, description, button }) => {
  const position = Object.keys(vignette);
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

  const trackCTA = useRef();
  const isVisible = useOnScreen(trackCTA);

  const trackGTM = (button, eventName) => {
    let obj = {
      id: button.id,
      name: button.label,
      position: 'Slider article'
    };
    useGTM(obj, eventName);
  };

  isVisible ? trackGTM(button, TrackEvent.PromotionPrint) : null;

  
  return (
    <div className={styles.shoppingList}>
      <div className="title-edito2">{title}</div>
      <p className={styles.intro}>{description}</p>
      <div className={styles.SliderContainer}>
        <Slider {...settings} className={styles.cards}>
          {vignette.map((card, position ) => {
            return <ShoppingCard {...card} key={`${card.pcid}-${position}`} position={position}/>;
          })}
        </Slider>
      </div>
      {button !== null ? (
        <a type="button" className={`button ${styles.buttonShoppingList}`} href={button.link} ref={trackCTA}
        onClick={(e) => {
          e.preventDefault();
          trackGTM(button, TrackEvent.PromotionClick);
        }}>
          {button.label}
        </a>
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
