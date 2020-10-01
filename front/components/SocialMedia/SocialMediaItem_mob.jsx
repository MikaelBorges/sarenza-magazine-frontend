import PropTypes from 'prop-types';
import React from 'react';

const SocialMediaItem_mob = (props) => {
    return (
        <li>
            <a href={props.links} key={props.ids} className={`sprited ${props.items}`}>
                {props.names}
            </a>
        </li>
    );
};

SocialMediaItem_mob.propTypes = {
    links: PropTypes.string.isRequired,
    ids: PropTypes.string.isRequired,
    items: PropTypes.string.isRequired,
    names: PropTypes.string.isRequired
};

export default SocialMediaItem_mob;
