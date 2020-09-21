import React from 'react';

const Votes = ({label, link}) => {
    return (
    <a href={link} className="votes">{label}</a>
    );
};

export default Votes;