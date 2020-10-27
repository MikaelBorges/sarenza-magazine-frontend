/* eslint-disable no-irregular-whitespace */

import PropTypes from 'prop-types';
import React from 'react';
import styles from './Article.module.scss';
import ShoppingList from './components/ShoppingList/ShoppingList';
/* import ShoppingListMobile from './components/ShoppingList/ShoppingList.mobile'; */

const Article = ({ article }) => {
  return (
    article && (
      <div className={styles.article}>

      <ShoppingList
        title="Shopping liste :"
        intro="Vous aussi, entrez dans la légende !"
        textButton="Voir la sélection"
        urlButton="#"
        ShoppingCards={[
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '1Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '2Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '3Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '4Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '5Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '6Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '7Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '8Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '9Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '10Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '11Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          },
          {
            cardImage: 'https://dummyimage.com/240x330',
            stateLabel: 'New!',
            titleProduct: '12Made by SARENZA',
            descriptionProduct: 'W Blazer Mid Vintage Suede',
            urlProduct: '#',
            pcid: '75015'
          }
        ]}
      />

      {/* <ShoppingListMobile
        title="Shopping liste :"
        intro="Vous aussi, entrez dans la légende !"
        textButton="Voir la sélection"
        urlButton="#"
        ShoppingCards={[
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '1Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '2Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '3Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '4Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '5Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '6Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '7Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '8Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '9Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '10Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '11Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'},
          {cardImage: "https://dummyimage.com/296x406", stateLabel: 'New!', titleProduct: '12Made by SARENZA', descriptionProduct: 'W Blazer Mid Vintage Suede', urlProduct: '#', pcid: '75015'}
        ]}
      /> */}
      </div>
    )
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string
  })
};

Article.defaultProps = {
  article: {}
};

export default Article;
