import React from 'react';
import Link from './Link';
import PropTypes from 'prop-types'

function BlockLinks({titles, links}) {
    return (
        <div>
            <p>{titles}</p>
            {links.map( (link)=>{
            return  <Link link={link.link} label={link.label}  />
            })}
        </div>
    );
}

BlockLinks.propTypes = {
    titles: PropTypes.string.isRequired,
};

export default BlockLinks;