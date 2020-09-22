import React from 'react';

import Button from '../Button/Button';


const Votes = ({label, link}) => {
    return (
    <Button href={link} className="votes">{label}</Button>
    );
};

Votes.propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Votes;