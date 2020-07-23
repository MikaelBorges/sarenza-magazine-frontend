import React from "react";

import styled from "styled-components";
import { Image } from "../Image/Image";


export const EditoTitle = ({content, title, src, alt, className}) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <Image />
      </div>
    );
};