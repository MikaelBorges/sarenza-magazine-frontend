import React from 'react';

const CountrySelectorItem = ({Text, Link, domain}) => {
    return (
        <li>
            <a href={Link} className={'flags gtm-click flags-' + domain} target="_blank">{Text}</a>
        </li>
    );
}

export default CountrySelectorItem;