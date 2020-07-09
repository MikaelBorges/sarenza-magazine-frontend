import React from "react";
import styled from "styled-components";

const Button = styled.a`
  color: #1d1d1b;
  font: 400 18px/36px futur, Arial Narrow, sans-serif;
  background: #f2f2f2;
  padding: 0 24px;
  border-radius: 24px;
  height: 38px;
  display: inline-block;
  border: 1px solid #f2f2f2;
  transition: background 0.25s ease, color 0.25s ease, border 0.25s ease;
  cursor: pointer;
  text-transform: uppercase;
  margin: 4px;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tag = ({ href, label }) => {
  return <Button href={href}>{label}</Button>;
};

export default Tag;
