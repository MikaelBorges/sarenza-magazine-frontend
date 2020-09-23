import React from 'react';

const CountrySelector = () => {
    return (
        <div className="country-selector">
            {/* Pays courant */}
            {CountryList.filter(country => country.isCurrent === true).map(filteredCountries => (
                <div className={'selected flags flags-' + filteredCountries.domain}>
                    {filteredCountries.Text}
                </div>
            ))}
            {/* liste des pays sans le pays courant */}
            <ul class="list">
            {CountryList.filter(country => country.isCurrent === null).map(filteredCountries => (
                <li>
                    <a href={filteredCountries.Link} className={'flags gtm-click flags-' + filteredCountries.domain} target="_blank">{filteredCountries.Text}</a>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default CountrySelector;