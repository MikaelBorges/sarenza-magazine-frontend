import React from 'react';
import PropTypes from 'prop-types';

const Reassurance = props => {
    return (
    <li key={props.ids} className={`pictenza ${props.icons}`} >{props.texts}</li>
        
    );
};

Reassurance.propTypes = {
    ids: PropTypes.string.isRequired,
    icons:PropTypes.string.isRequired,
    texts: PropTypes.string.isRequired

};

export default Reassurance;