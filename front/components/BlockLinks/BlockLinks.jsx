import React from 'react';
// import Link from './Link';



const Links = ({title, link}) => {
    return (
        <div>
            <p>{title}</p>
            {/* {link.map((label,link)=>{
                <Link link={link} label={label} />
            })} */}
        </div>
        );
    };
    
    export default Links;