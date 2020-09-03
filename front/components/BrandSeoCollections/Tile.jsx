import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";

const Section = styled.section`
  padding: 20px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 98%;
  height: 500px;
  overflow: hidden;

  div, img {
        transition: opacity 0.7s ease, right 0.7s ease, left 0.7s ease;
        opacity: 0;
    }

    div {
        z-index: 1;
    }

    img {
        position: absolute;
        top: 0;
    }

    &:nth-of-type(even) {
        div {
            left: -100%;
        }
        img {
            right: -100%;
        }
    }

    &:nth-of-type(odd) {
        div {
            right: -100%;
        }
        img {
            left: -100%;
        }
    }

    &.show {
        div, img {
            opacity: 1;
        }

        &:nth-of-type(even) {
            div {
                left: 0;
            }
            img {
                right: 0;
            }
        }
    
        &:nth-of-type(odd) {
            div {
                right: 0;
            }
            img {
                left: 0;
            }
        }
    }
`;

const Title = styled.div`
  font-size: 19.6px;
  text-transform: uppercase;
  margin: 0;
  font-family: futur, Arial Narrow, sans-serif;
  font-weight: 700;
`;

const Description = styled.div`
  text-align: left;
  margin: 20px 0;
  font-family: proximnr, Arial, sans-serif;
  line-height: 1.5em;
  font-size: 1em;
  color: #999;
`;

const Tile = ({ backgroundUrl, button, title, description }) => {

    const [display, setDisplay] = useState(false);
    const inputRef = useRef();
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const y = inputRef.current.getBoundingClientRect().y;
        if (y < windowHeight * 0.5) {
            setDisplay(true);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

  return (
    <React.Fragment>
      <Section className={display ? 'show' : ''} ref={inputRef} >
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button action={button.href} value={button.label} />
        </div>
        <Image src={backgroundUrl} alt={title} />
      </Section>
    </React.Fragment>
  );
};

export default Tile;
