import React from "react";

import styled from "styled-components";
import { Image } from "../Image/Image";
import { Button } from "../Button/Button";

const Section = styled.section`
  color: #fff;
  position: relative;
  width: 100%;
  margin-top: 20px;
  display: block;

  &::before {
    vertical-align: middle;
    width: 1px;
    display: inline-block;
    content: "";
    padding-top: 43.6%;
  }
  div {
    vertical-align: middle;
  }
`;

const editoContent = ({contentType, content, title, author}) => {

  let editoTitle = function() {
    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <Image />
      </div>
    );
  };

  let editoCitation = function() {
    let auth = {author} != "" ? ` - ${author}` : ``;
    return (
      <div>
        <p>&laquo; {content} &raquo;${auth}</p>
        <Button />
      </div>
    );
  };

  let editoDefault = function(contentText) {
    return (
      <p>{contentText}</p>
    );
  };

  switch (contentType) {
    case "editoTitle":
      return editoTitle();
    case "editoCitation":
      return editoCitation();
    default:
      return editoDefault({content});
  }
};

export default editoContent;