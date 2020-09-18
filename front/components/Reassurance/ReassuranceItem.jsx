import React from 'react';




const ReassuranceItem = ({text, classIcon}) => {
    return (
            <p className={classIcon}>{text}</p>
    );
};

export default ReassuranceItem;