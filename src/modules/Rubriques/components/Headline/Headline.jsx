import PropTypes from 'prop-types';
import React from 'react';

import BrandSeoCollections from '../BrandSeoCollections/BrandSeoCollections';

const Headline = ({ image, title, description }) => {
  return (
    <div>
      <div>
        <BrandSeoCollections
          data={[
            {
              backgroundUrl: image,
              title,
              description
            }
          ]}
        />
      </div>
    </div>
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
