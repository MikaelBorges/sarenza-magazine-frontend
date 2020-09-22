import React from 'react';

import Button from '../Button/Button';


const Votes = ({label, link}) => {
    return (
    <Button href={link} className="votes">{label}</Button>
    );
};

export default Votes;