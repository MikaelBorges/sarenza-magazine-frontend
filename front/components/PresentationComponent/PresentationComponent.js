import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Image } from '../Image/Image';
import { Item } from '../Item/Item';

const PresentationComponent = (data) => {
    const getPhoto = (index, data) => {
        if (data.items && data.items[index])
            return { src: data.items[index].photo_url, ...data.items[index] };
        else return null;
    };

    const photo1 = getPhoto(0, data);
    const photo2 = getPhoto(1, data);
    return (
        <React.Fragment>
            <Item>
                <Image {...photo1} />
            </Item>
            <Item>
                <ReactMarkdown source={data.description} />
            </Item>
            {photo2 && (
                <Item>
                    <Image {...photo2} />
                </Item>
            )}
        </React.Fragment>
    );
};

PresentationComponent.propTypes = {
    items: PropTypes.array,
    description: PropTypes.string
};

export default PresentationComponent;
