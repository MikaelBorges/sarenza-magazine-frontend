import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';

const Division = styled.div`
    text-align: center;
    margin: 20px 0;
    font-family: proximnr,Arial,sans-serif;
    line-height: 1.5em;
    font-size: 16px;
    color: #999;
    > cite {
        display: block;
        margin: 40px auto;
        text-align: center;
        width: 63%;
        background-size: unset;
        background: url(http://cdn.sarenza.net/static/v3/Prod/images/Edito/guillemet-ouvrant.png) top left no-repeat,url(http://cdn.sarenza.net/static/v3/Prod/images/Edito/guillemet-fermant.png) bottom right no-repeat;
        > p {
            font: 700 18px/22px futur,Arial Narrow,sans-serif;
            text-transform: uppercase;
            margin: 16px auto 32px;
            display: inline-block;
        }
    }
`;

export const EditoCitation = ({ content, author, button }) => {
    let auth = { author } != '' ? ` - ${author}` : ``;
    return (
        <Division>
            <cite>
                <p>
                    &laquo; {content} &raquo; {auth}
                </p>
            </cite>
            <Button btn={{ action: button.action, value: button.value }} />
        </Division>
    );
};
