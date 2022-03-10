import React from 'react';
import styles from './SubMenu.module.scss';

const SubMenu = ({ data }) => {
  let columns = [];
  let build = [];

  /* Build zone 1 → 6 repartition */
  for (let i = 1; i <= 6; i++) {
    let column = data.find((menu) => menu.position == i) ?? null;
    build.push(column);
  }

  const allColumns = () => {
    const numberOfColumns = Math.ceil(build.length / 2);
    for (let i = 1; i <= numberOfColumns; i++) {
      columns.push(column(i));
    }
  };

  const column = (i) => {
    return build.slice(i * 2 - 2, i * 2).map(
      (item) =>
        item && (
          <div className="col" key={item.id}>
            <span className="title">
              <span>{item.category}</span>
            </span>
            <ul className="list">
              {item.links.map((link) => {
                return (
                  <li className={`link ${link.boldLink === true ? 'all' : ''}`} key={link.label}>
                    <a href={link.link}>
                      {link.label}
                      {link.labelPicto ? (
                        <span className={styles.picto} style={{ color: link.colorPicto }}>
                          {' '}
                          {link.labelPicto}
                        </span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )
    );
  };

  return (
    <div className="sub">
      <div className="sub-inner" style={{ height: '480px' }}>
        <a className="back" href="#0">
          Retour
        </a>
        <a className="root" data-promo data-ea href="/chaussure-nouvelle-collection-homme">
          Afficher tout
        </a>

        {allColumns()}
        {columns.map((item, index) => (
          <div className="col-container" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
