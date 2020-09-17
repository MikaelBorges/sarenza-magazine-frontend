import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

const Section = styled.section`
    margin: 40px 0;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
`;
const TextPart = styled.div`
    text-align: left;
`;
const Title = styled.h2`
    font: 700 32px/32px futur, Arial Narrow, sans-serif;
    text-transform: uppercase;
`;
const Description = styled.p`
    color: #737373;
    font-family: robotocd, Arial Narrow, sans-serif;
    font-size: 14px;
`;

const Alert = ({ button, text, description }) => {
    return (
        button && (
            <Section>
                <TextPart>
                    <Title>{text}</Title>
                    <Description>{description}</Description>
                </TextPart>
                <div>
                    <Button value={button.label} action={button.href} />
                </div>
            </Section>
        )
    );
};

export default Alert;
