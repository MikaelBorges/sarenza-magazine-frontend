import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';
import { Item } from '../Item/Item';

const LogoContainer = styled(Item)`
    height: 260px;
`;

const HeaderComponent = (logo) => {
    return (
        <LogoContainer>
            <Header {...logo} />
        </LogoContainer>
    );
};
export default HeaderComponent;
