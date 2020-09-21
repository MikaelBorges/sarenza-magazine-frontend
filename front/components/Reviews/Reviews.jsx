import React from 'react';

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

export default Reviews;