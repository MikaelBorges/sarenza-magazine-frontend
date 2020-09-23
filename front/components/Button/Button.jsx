import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    color: #fff;
    z-index: 0;
    position: relative;
    vertical-align: middle;
    font: 700 12px/14px robotoc, Arial Narrow, sans-serif;
    text-transform: uppercase;
    padding: 0 64px 0 32px;
    min-width: 96px;
    height: 48px;
    overflow: hidden;
    outline: 0;
    transition: background 0.25s ease, color 0.25s ease, border 0.25s ease;
    display: inline-flex;
    align-items: center;
    text-align: left;
    text-decoration: none;
    margin: 0 auto 40px auto;
    background: #1d1d1b;

    &:visited,
    &:hover {
        text-decoration: none;
        color: #fff;
    }

    &:after {
        position: absolute;
        right: 32px;
        top: 14px;
        margin-top: 0;
        margin-left: 1.5em;
        content: '\\e372';
        font-family: pictenza;
        font-size: 1em;
        font-style: normal;
        speak: none;
        font-weight: 700;
        -webkit-font-smoothing: antialiased;
    }
`;
export const Button = ({ action, value, className }) => {
    return value ? (
        <Link href={action} className={className}>
            {value}
        </Link>
    ) : (
        'Erreur'
    );
};
