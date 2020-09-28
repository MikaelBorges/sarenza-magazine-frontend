import React from 'react';
import PropTypes from 'prop-types';

const SocialMediaItem = props => {
    return (
        <li>
            <a href={props.links} key={props.ids} className={`sprited ${props.items}`}>
                {props.names}
            </a>
        </li>
        
    );
};

SocialMediaItem.propTypes = {
    
};

export default SocialMediaItem;