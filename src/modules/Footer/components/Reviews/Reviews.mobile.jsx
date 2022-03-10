import PropTypes from 'prop-types';
import React from 'react';

import VotesMobile from './Votes.mobile';

const style = {
  display: 'none'
};

const ReviewsMobile = ({ data }) => {
  return (
    <>
      {data && (
        <section className="reviews">
          <div
            className="reviews-sarenza googleBc mt-1"
            itemScope
            itemType="http://data-vocabulary.org/Review-aggregate">
            <span itemProp="itemreviewed" style={style}>
              Sarenza
            </span>
            <div className="title-level2">{data.title}</div>
            <span>{data.maxRate}</span>
            <p className="rating" itemProp="rating" itemType="//data-vocabulary.org/rating">
              <span className="average" itemProp="average">
                4.7
              </span>
              <span className="best" itemProp="best">
                / 5
              </span>
              <span className={`rate ${data.rate}`} />
              <VotesMobile data={data.votes} />
            </p>
          </div>
        </section>
      )}
    </>
  );
};

ReviewsMobile.propTypes = {
  title: PropTypes.string,
  maxRate: PropTypes.string,
  rate: PropTypes.string
};

ReviewsMobile.defaultProps = {
  title: '',
  maxRate: '',
  rate: ''
};

export default ReviewsMobile;
