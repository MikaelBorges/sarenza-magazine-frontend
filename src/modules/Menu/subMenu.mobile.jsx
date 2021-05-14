import React, { useState } from 'react';
import styles from './SubMenu.mobile.module.scss';

const SubMenu = ({ data, tabId, menuId, setId }) => {
  const [listOpen, addList] = useState(false);
  /* className={cn("sub-inner", {
                ['visible']: tabId 
            })} */
  return (
    <div className="sub">
      <div className="sub-inner" style={{ display: tabId === menuId ? 'block' : 'none' }}>
        <a
          className="back"
          href="#0"
          onClick={() => {
            setId(undefined);
          }}
          role="button"
          onKeyPress={() => {}}
          tabIndex={0}>
          Retour
        </a>
        <a className="root" data-promo data-ea>
          Afficher tout
        </a>
        {data
          .filter((item) => item.category !== 'Genre')
          .sort(function (a, b) {
            return a.position - b.position;
          })
          .map((itemFiltered) => {
            return (
              <div className="col" key={itemFiltered.id}>
                <span
                  className="title"
                  onClick={() => addList(listOpen ? undefined : itemFiltered.id)}
                  role="button"
                  onKeyPress={() => {}}
                  tabIndex={0}>
                  <span>{itemFiltered.category}</span>
                </span>
                <ul
                  className="list"
                  style={{
                    display: listOpen === itemFiltered.id ? 'block' : 'none'
                  }}>
                  {itemFiltered.links.map((link) => {
                    return (
                      <li className="link" key={link.label}>
                        <a href={link.link}>
                          {link.label}
                          {link.labelPicto ? <span className={styles.picto} style={{ color: link.colorPicto }}> {link.labelPicto}</span> : null }
                        </a>
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
