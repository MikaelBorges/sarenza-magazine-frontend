import React from "react";

import styled from "styled-components";
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

const Link = styled.a`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  height: auto;
  z-index: 1;
  width: 100%;
`;

const Img = styled.img`
  height: auto;
  z-index: 1;
  width: 100%;
`;

const Content = styled.div`
  display: inline-block;
  position: relative;
  width: 99%;
  z-index: 3;
  text-align: center;
`;

const Title = styled.span`
  font-size: 4em;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0;
  font-family: proximnb, Arial, sans-serif;
`;

const SubTitle = styled.p`
  width: 50%;
  margin: 10px auto 20px;
  font-size: 1.2em;
  line-height: 1.5em;
  font-family: proximnr, Arial, sans-serif;
  color: #fff;
`;

const SectionPage = ({ backgroundUrl, button, title, description }) => {
  return (
    backgroundUrl && (
      <Section>
        {button && (
          <Link href={button.href}>
            <Img src={backgroundUrl} alt={title} />
          </Link>
        )}
        <Content>
          <div>
            <Title>{title}</Title>
            <SubTitle>{description}</SubTitle>
            <Button action={button.href} value={button.label} />
          </div>
        </Content>
      </Section>
    )
  );
};

export default SectionPage;
