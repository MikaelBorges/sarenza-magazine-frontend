import PropTypes from 'prop-types';
import React from 'react';

import Heading from '@/components/commons/Heading/Heading.mobile';
import Text from '@/components/commons/Text/Text.mobile';

import RubriquesLinks from '../RubriquesLinks/RubriquesLinks';
import styles from './Header.mobile.module.scss';

const Header = ({ header }) => {
  return (
    <div className={styles.header}>
      <div className={styles.blockText}>
        <div className={styles.title}>
          <Heading>{header.title}</Heading>
          <img
            src="https://cdn.sarenza.net/v3/Prod/visuels-site/Mag/Logo/logoMagazine.jpg

"
            alt="logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.description}>
          <Text medium>{header.description}</Text>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.rubriques}>
          <RubriquesLinks rubriques={header.rubriques} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string)
  })
};

Header.defaultProps = {
  header: PropTypes.shape({
    title: '',
    description: '',
    categories: []
  })
};
export default Header;
