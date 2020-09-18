import React from 'react';

import Votes from './Votes';



const Reviews = ({title, maxRate, rate, label, link}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{maxRate}</p>
            <span className={rate}></span>
          <Votes label={label} link={link}/>
        </div>
    );
};

export default Reviews;