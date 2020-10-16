import PropTypes from 'prop-types';
import React from 'react';

import Heading from '@/components/commons/Heading';
import Text from '@/components/commons/Text/Text';

import RubriquesLinks from '../RubriquesLinks/RubriquesLinks';
import styles from './Header.module.scss';

const Header = ({ header }) => {
  return (
    <div extraClasses={styles.header}>
      <div extraClasses={styles.heading}>
        <Heading>{header.title}</Heading>
      </div>
      <div extraClasses={styles.description}>
        <Text medium>{header.description}</Text>
      </div>
      <div extraClasses={styles.heading}>
        <RubriquesLinks rubriques={header.rubriques} />
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
