import React from "react";

import styled from "styled-components";
import { Image } from "../Image/Image";

const Division = styled.div`
    text-align: left;
    margin: 20px 0;
    font-family: proximnr,Arial,sans-serif;
    line-height: 1.5em;
    font-size: 16px;
    color: #999;
`;

const HeadLevel2 = styled.h2`
    text-align: left;
    margin: 20px 0;
    font-family: proximnr,Arial,sans-serif;
    line-height: 1.5em;
    font-size: 16px;
    color: #999;
`;

const Paragraphe = styled.p`
    text-align: left;
    margin: 20px 0;
    font-family: proximnr,Arial,sans-serif;
    line-height: 1.5em;
    font-size: 16px;
    color: #999;
`;

export const EditoTitle = ({content, title, ...rest}) => {
    return (
      <Division>
        <HeadLevel2>{title}</HeadLevel2>
        <Paragraphe>{content}</Paragraphe>
        <Image {...rest} />
      </Division>
    );
};