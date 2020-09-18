import React from 'react';

const Votes = ({label, link}) => {
    return (
    <a href={link}>{label}</a>
    );
};

export default Votes;