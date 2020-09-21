import React from 'react';

const Link = ({label, link}) => {
    return (
        <a href={link}> {label}</a>
    );
};

export default Link;