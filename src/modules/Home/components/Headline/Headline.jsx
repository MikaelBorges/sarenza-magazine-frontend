import PropTypes from 'prop-types';
import React from 'react';

import { Col, Row } from '../../../../app/components/commons/Grid';
import BrandSeoCollections from '../BrandSeoCollections/BrandSeoCollections';

const Headline = ({ image, title, description }) => {
  return (
    <Row>
      <Col span={12}>
        <BrandSeoCollections
          data={[
            {
              backgroundUrl: image,
              title,
              description
            }
          ]}
        />
      </Col>
    </Row>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

Headline.defaultProps = {
  title: '',
  image: '',
  description: ''
};

export default Headline;
