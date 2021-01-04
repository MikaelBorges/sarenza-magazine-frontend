import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './ProductLine.module.scss';
import Image from '@/components/commons/Image/Image';

const ProductLine = ({ ProductCard }) => {

  const [favoriteStatus, setFavoriteStatus] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setFavoriteStatus(!favoriteStatus);
  }

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
    <>

    <div className={styles.productLine}>
      <div className={styles.SliderContainer}>
        <Slider {...settings} className={styles.cards}>
          {ProductCard.map((card) => {
            return (
              <div className={styles.card} key={card.pcid}>
                <div className={styles.cardSubcontainer}>
                  {card.url_image && (
                    <Image src={card.url_image} alt="image-product-line" />
                  )}
                  {card.url_cta && (
                    <a
                      className={`button darkseid pictenza pictenza-basket ${styles.gellule}`}
                      href={card.url_cta}
                      role="button"
                      tabIndex={-1}
                    >
                      <span className={styles.onlyText}>{card.url_text}</span>
                    </a>
                  )}
                  {card.pcid && (
                    <span
                      className={`pictenza pictenza-favorites ${styles.favoriteCard} ${
                        favoriteStatus && styles.pictenzaFavoritesSelect
                      }`}
                      data-pcid={card.pcid}
                      onClick={(e) => handleClick(e)}
                      role="button"
                      tabIndex={-2}
                    >
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* <div className={styles.card} key="1">
              <div className={styles.cardSubcontainer}>
                <img className={styles.image} src="https://cdn.sarenza.net/_img/productsv4/0000264771/0000264771_484173_09_504x690.jpg" alt="model" />
                <span
                  className={`pictenza pictenza-favorites ${styles.favoriteCard} ${
                    favoriteStatus ? styles.pictenzaFavoritesSelect : ''
                  }`}
                  data-pcid="1234"
                  onClick={(e) => handleClick(e)}
                >
                </span>
              </div>
          </div>

          <div className={styles.card} key="2">
              <div className={styles.cardSubcontainer}>
                <img className={styles.image} src="https://cdn.sarenza.net/_img/productsv4/0000264771/0000264771_484173_09_504x690.jpg" alt="model" />
                <span
                  className={`pictenza pictenza-favorites ${styles.favoriteCard} ${
                    favoriteStatus ? styles.pictenzaFavoritesSelect : ''
                  }`}
                  data-pcid="1234"
                  onClick={(e) => handleClick(e)}
                >
                </span>
              </div>
          </div> */}

        </Slider>
      </div>
    </div>

    </>
  );
};

export default ProductLine;
