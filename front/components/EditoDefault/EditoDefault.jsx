import React from "react";
import styled from "styled-components";

const Paragraphe = styled.p`
    text-align: left;
    margin: 20px 0;
    font-family: proximnr,Arial,sans-serif;
    line-height: 1.5em;
    font-size: 16px;
    color: #999;
`;

export const EditoDefault = ({content}) => {
    return (
        <Paragraphe>{content}</Paragraphe>
    );
};