import PropTypes from 'prop-types';
import React from 'react';

import Col from '@/components/commons/Grid/Col';
import Row from '@/components/commons/Grid/Row';
import Heading from '@/components/commons/Heading';
import Text from '@/components/commons/Text/Text';

import RubriquesLinks from '../RubriquesLinks/RubriquesLinks';
import styles from './Header.module.scss';

const Header = ({ header }) => {
  return (
    <Row extraClasses={styles.header}>
      <Col span={12} extraClasses={styles.heading}>
        <Heading>{header.title}</Heading>
      </Col>
      <Col span={12} extraClasses={styles.description}>
        <Text medium>{header.description}</Text>
      </Col>
      <Col span={12} extraClasses={styles.heading}>
        <RubriquesLinks rubriques={header.rubriques} />
      </Col>
    </Row>
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
