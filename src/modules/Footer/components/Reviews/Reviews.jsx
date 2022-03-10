import PropTypes from 'prop-types';
import React from 'react';

import Votes from './Votes';

const style = {
  display: 'none'
};

const Reviews = ({ data }) => {
  return (
    <>
      {data && (
        <div className="reviews">
          <span itemProp="itemreviewed" style={style}>
            Sarenza
          </span>
          <div className="title-level3">{data.title}</div>
          <span>{data.maxRate}</span>
          <p className="rating" itemProp="rating" itemType="//data-vocabulary.org/rating">
            <span className="average" itemProp="average">
              4.7
            </span>
            <span className="best" itemProp="best">
              / 5
            </span>
            <span className={`rate ${data.rate}`} />
            <Votes data={data.votes} />
          </p>
        </div>
      )}
    </>
  );
};

Reviews.propTypes = {
  title: PropTypes.string,
  maxRate: PropTypes.string,
  rate: PropTypes.string
};

Reviews.defaultProps = {
  title: '',
  maxRate: '',
  rate: ''
};

export default Reviews;
