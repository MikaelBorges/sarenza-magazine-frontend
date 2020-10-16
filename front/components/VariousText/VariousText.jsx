import React from 'react';
import PropTypes from 'prop-types';

const VariousText = props => {
    return (
        <div>
            <div>{props.title}</div>
            <p>{props.text}</p>
        </div>
        );
    };
    
    VariousText.propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };
    
    export default VariousText;