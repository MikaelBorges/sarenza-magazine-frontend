import React from 'react';

const SubMenu = ({ data, tabActivate }) => {
  return (
    <div className="sub">
      <div className="sub-inner">
        <a className="back" href="#0">
          Retour
        </a>
        <a className="root  " data-promo data-ea href="/chaussure-nouvelle-collection-homme">
          Afficher tout
        </a>
        {tabActivate
          ? data
              .filter((item) => item.category !== 'Genre')
              .map((itemFiltered) => {
                return (
                  <div className="col" key={itemFiltered.id}>
                    <span className="title">
                      <span>{itemFiltered.category}</span>
                    </span>
                    <ul className="list">
                      {itemFiltered.links.map((link) => {
                        return (
                          <li className="link" key={link.label}>
                            <a href={link.link}>{link.label}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })
          : data.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <span className="title">
                    <span>{item.category}</span>
                  </span>
                  <ul className="list">
                    {item.links.map((link) => {
                      return (
                        <li
                          className={`link ${
                            link.label === 'Femme' ||
                            link.label === 'Homme' ||
                            link.label === 'Enfant'
                              ? 'all'
                              : ''
                          }`}
                          key={link.label}>
                          <a href={item.link}>{link.label}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SubMenu;
