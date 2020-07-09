import React from "react";
import styled from "styled-components";

const Link = styled.a`
  background: #f2f2f2;
  color: #000;
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

  &::visited {
    text-decoration: none;
  }
`;
export const Button = ({ btn }) => {
  return btn ? <Link href={btn.action}>{btn.value}</Link> : "Erreur";
};
