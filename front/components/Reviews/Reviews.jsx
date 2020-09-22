import React from 'react';
import PropTypes from 'prop-types';


import Votes from './Votes';

const Reviews = ({title, maxRate, rate, label, link}) => {
    return (
        <div>
            <p>{title}</p>
            <span>{maxRate}</span>
            <p className={`rate ${rate}`}></p>
          <Votes label={label} link={link}/>
        </div>
    );
};

Reviews.propTypes = {
    title: PropTypes.string.isRequired,
    maxRate: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired
};


export default Reviews;