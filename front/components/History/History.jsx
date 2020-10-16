import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    margin-bottom: 32px;
    display: block;
    margin: 0 32px;
    font: 700 64px/1em futur, Arial Narrow, sans-serif;
    text-transform: uppercase;
`;

const Description = styled.div`
    font-family: robotoc, Arial Narrow, sans-serif;
    font-size: 14px;
    padding: 50px 0;
    text-align: center;
`;
const History = ({ title, history }) => {
    return (
        title && (
            <div>
                <Title>{title}</Title>
                <Description>{history}</Description>
            </div>
        )
    );
};

export default History;
