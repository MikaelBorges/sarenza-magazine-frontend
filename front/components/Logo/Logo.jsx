import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image/Image';

const Img = styled(Image)`
    opacity: ${(props) => props.opacity};
`;

const Logo = ({ src, alt, className, opacity }) => {
    return (
        <span>
            <Img src={src} alt={alt} className={className} opacity={opacity} />
        </span>
    );
};

export default Logo;
