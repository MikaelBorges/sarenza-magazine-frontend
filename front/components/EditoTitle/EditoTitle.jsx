import React from 'react';

import styled from 'styled-components';
import { Image } from '../Image/Image';

const Division = styled.div`
    margin: 0;
`;

const HeadLevel2 = styled.h2`
    margin: 0;
    font: 700 40px/42px robotoc, Arial Narrow, sans-serif;
    color: #1d1d1b;
    text-align: center;
`;

const Paragraphe = styled.p`
    font-family: robotoc, Arial Narrow, sans-serif;
    color: #999;
    font-size: 14px;
    margin: 16px auto 32px;
    line-height: 1.4em;
    text-align: center;
`;

export const EditoTitle = ({ content, title, ...rest }) => {
    return (
        <Division>
            <HeadLevel2>{title}</HeadLevel2>
            <Paragraphe>{content}</Paragraphe>
            <Image {...rest} />
        </Division>
    );
};
