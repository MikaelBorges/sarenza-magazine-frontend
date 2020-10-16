import PropTypes from 'prop-types';
import React from 'react';

import SocialMediaItem_mob from './SocialMediaItem_mob';

const SocialMedia_mob = (props) => {
    return (
        <div>
            <div>{props.title}</div>
            <ul className="list social-media">
                {props.SocialMediaItem.map((item) => {
                    return (
                        <SocialMediaItem_mob
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

SocialMedia_mob.propTypes = {
    title: PropTypes.string.isRequired
};

export default SocialMedia_mob;
