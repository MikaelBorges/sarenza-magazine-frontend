import React from 'react';

function Link(props) {
    return (
        <p><a href={props.link}>{props.label}</a></p>
        );
    }

    Link.propTypes = {
        link: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    };
    
    export default Link;