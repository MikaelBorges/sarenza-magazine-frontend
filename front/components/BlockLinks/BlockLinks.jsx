import React from 'react';
import Link from './Link';

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

export default BlockLinks;