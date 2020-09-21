import React from 'react';

const FooterLink = (props) => {
    return (
        <p>
            <a href={props.urls} id={props.ids} data-content={props.contents} >
            {props.texts}
            </a>
        </p>
        
        );
    };
    
    export default FooterLink;