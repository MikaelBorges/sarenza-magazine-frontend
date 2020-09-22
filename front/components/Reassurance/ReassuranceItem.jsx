import React from 'react';
import PropTypes from 'prop-types';


const ReassuranceItem = ({text, classIcon}) => {
    return (
            <p className={classIcon}>{text}</p>
    );
};

ReassuranceItem.propTypes = {
    text: PropTypes.string.isRequired,
    classIcon: PropTypes.string.isRequired,
};

export default ReassuranceItem;