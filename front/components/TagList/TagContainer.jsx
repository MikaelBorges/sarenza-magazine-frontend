import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const TagList = styled.div`
    margin: 30px 0;
    padding: 0;
    font-size: 0;
`;
const TagContainer = ({ tags }) => {
    return (
        <TagList>
            {tags.map(({ label, href, id }) => (
                <Tag href={href} key={id} label={label} />
            ))}
        </TagList>
    );
};

export default TagContainer;
