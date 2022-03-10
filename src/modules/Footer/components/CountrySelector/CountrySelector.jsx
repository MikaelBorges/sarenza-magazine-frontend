import React from 'react';

const CountrySelector = ({ data }) => {
  return (
    <>
      {/* Pays courant */}
      {data &&
        data
          .filter((country) => country.isCurrent === true)
          .map((filteredCountry) => (
            <div
              className={`selected flags folder flags-${filteredCountry.domain}`}
              key={filteredCountry.id}>
              {filteredCountry.text}
            </div>
          ))}
      {/* liste des pays sans le pays courant */}
      <ul className="list">
        {data &&
          data
            .filter((country) => country.isCurrent === null)
            .map((filteredCountry) => (
              <li key={filteredCountry.id}>
                <a
                  href={filteredCountry.href}
                  className={`flags gtm-click flags-${filteredCountry.domain}`}
                  /* target="_blank" */
                >
                  {filteredCountry.text}
                </a>
              </li>
            ))}
      </ul>
    </>
  );
};

export default CountrySelector;
