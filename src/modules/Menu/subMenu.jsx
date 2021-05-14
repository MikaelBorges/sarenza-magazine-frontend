import React from 'react';
import styles from './SubMenu.module.scss';

const SubMenu = ({ data }) => {

  data.sort(function (a, b) {
    return a.position - b.position;
  });

  let columns = [];

  const allColumns = () => {
    const numberOfColumns = Math.ceil(data.length / 2);
    for (let i = 1; i <= numberOfColumns; i++) {
      columns.push(
        column(i)
      );
    }
  };

  const column = i => {
    return (
      data.slice((i*2)-2, i*2).map(item => (
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
                  <a href={link.link}>
                    {link.label}
                    {link.labelPicto ? <span className={styles.picto} style={{ color: link.colorPicto }}> {link.labelPicto}</span> : null }
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))
    )
  };

  return (
    <div className="sub">
      <div className="sub-inner" style={{ height: '480px'}} >
        <a className="back" href="#0">
          Retour
        </a>
        <a className="root" data-promo data-ea href="/chaussure-nouvelle-collection-homme">
          Afficher tout
        </a>

        {allColumns()}
        {columns.map( (item, index) => (
          <div className="col-container" key={index}>
            {item}
          </div>
        ))}

      </div>
    </div>
  );

};

export default SubMenu;
