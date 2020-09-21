import React from 'react';

import CountrySelectorItem from "./CountrySelectorItem";

const CountrySelector = ({Text, domain, data}) => {
    return (
        <div className="country-selector">
            <div className={'selected flags flags-' + domain}>
                {Text}
            </div>
            <ul class="list">
                { data && data.map((item, i) => <CountrySelectorItem text={item.text} classIcon={item.classIcon} key={i} />) }
            </ul>
        </div>
    );
};

export default CountrySelector;