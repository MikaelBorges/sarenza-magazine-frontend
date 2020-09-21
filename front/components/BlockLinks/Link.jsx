import React from 'react';

function Link(props) {
    return (
        <p><a href={props.link}>{props.label}</a></p>
        );
    }
    
    export default Link;