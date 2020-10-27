import PropTypes from 'prop-types';
import React from 'react';

import ShoppingCardMobile from './ShoppingCard/ShoppingCard.mobile';
import styles from './ShoppingList.mobile.module.scss';

const ShoppingListMobile = ({ ShoppingCards, title, intro, textButton, urlButton }) => {
  return (
    <div className={styles.shoppingList}>
      <h2 className={`title-level2 ${styles.title}`}>{title}</h2>
      <p className={styles.intro}>{intro}</p>
      <ul className={styles.cards}>
        {ShoppingCards.map((card) => {
          return (
            <ShoppingCardMobile
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
      </ul>
      <button type="button" className={`button ${styles.buttonShoppingList}`} href={urlButton}>
        {textButton}
      </button>
    </div>
  );
};

ShoppingListMobile.propTypes = {
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

ShoppingListMobile.defaultProps = {
  ShoppingCards: [],
  title: '',
  intro: '',
  textButton: '',
  urlButton: ''
};

export default ShoppingListMobile;
