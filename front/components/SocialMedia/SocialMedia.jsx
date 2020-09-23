import React from 'react';
import PropTypes from 'prop-types';
import SocialMediaItem from './SocialMediaItem';

const SocialMedia = props => {
    return (
        <div>
            <div>{props.title}</div>
            <ul className='list social-media'>
            {
                props.SocialMediaItem.map((item)=>{
                   return <SocialMediaItem items={item.Item} names={item.Name} links={item.Link} ids={item}/>
                })
            }
            </ul>
        </div>
    );
};

SocialMedia.propTypes = {
    title: PropTypes.string.isRequired
};

export default SocialMedia;