import React from "react";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";

import styled from "styled-components";

const Heading = styled.header`
  padding: 30px 0 0;
  text-align: center;
`;

const Container = styled.div`
  height: 90px;
  position: relative;
`;

const Header = ({ title, logo_url, alt }) => {
  return (
    title && (
      <Heading>
        <Container>
          <Logo src={logo_url} alt={alt} />
          <Title value={title} />
        </Container>
      </Heading>
    )
  );
};

export default Header;
