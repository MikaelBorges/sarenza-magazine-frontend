import React from 'react';
import PropTypes from 'prop-types';

const FooterLink = (props) => {
    return (
        <p>
            <a href={props.urls} id={props.ids} data-content={props.contents} >
            {props.texts}
            </a>
        </p>
        
        );
    };

    Reviews.propTypes = {
        urls: PropTypes.string.isRequired,
        ids: PropTypes.string.isRequired,
        contents: PropTypes.string.isRequired
    };
    
    export default FooterLink;