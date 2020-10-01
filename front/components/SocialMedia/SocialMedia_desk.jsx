import PropTypes from 'prop-types';
import React from 'react';

import SocialMediaItem_desk from './SocialMediaItem_desk';

const SocialMedia_desk = (props) => {
    return (
        <div>
            <div>{props.title}</div>
            <ul className="list social-media">
                {props.SocialMediaItem.map((item) => {
                    return (
                        <SocialMediaItem_desk
                            items={item.Item}
                            names={item.Name}
                            links={item.Link}
                            key={item.id}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

SocialMedia_desk.propTypes = {
    title: PropTypes.string.isRequired
};

export default SocialMedia_desk;
