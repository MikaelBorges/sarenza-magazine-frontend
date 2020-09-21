import React from 'react';
// import Link from './Link';



const Links = (props) => {
    return (

            <div>
                <p>{props.title}</p>
                {console.log(props.title)}

                    <Link link={props.link} label={props.label} key={props.id}   />

            </div>
        );
};
    
    export default Links;