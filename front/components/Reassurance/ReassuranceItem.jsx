import React from 'react';
import styled from 'styled-components';


const Icon = styled.div`
    font-size: 40px;
    line-height: 25px;
    margin: 0 0 20px;
    width: 100%;
`;

const ReassuranceItem = (text, classIcon) => {
    return (
        <React.Fragment>
            <Icon className={classIcon}>{text}</Icon>
        </React.Fragment>
    );
};

export default ReassuranceItem;