/* eslint-env browser */

import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from './Menu.mobile.module.scss';
import SubMenu from './subMenu.mobile';

const Menu = ({ menus, genders }) => {
  const [openMenu, setOpenMenu] = useState();

  useEffect(() => {
    const overlay = document.getElementById('MainNavOverlay');
    if (overlay) {
      if (openMenu) {
        overlay.style.display = 'block';
        overlay.style.transition = 'opacity 1s ease 0s';
      } else {
        overlay.style.display = 'none';
        overlay.style.transition = 'opacity 1s ease 0s';
      }
    }
  }, [openMenu]);

  const [openTab, setOpenTab] = useState();

  const [isActive, addActive] = useState();

  if (!menus || menus.length <= 0) {
    return 'Loading...';
  }
  return (
    <div className="no-touch">
      <header id="MainHeader-RD">
        <div id="InnerMainHeader">
          {/* Touch optimisation */}
          <div
            id="MainNavOpener"
            role="button"
            onKeyPress={() => {}}
            tabIndex={0}
            onClick={() => {
              setOpenMenu((show) => !show);
            }}>
            Menu
          </div>
          <div id="MainNavOverlay" style={{ display: 'none', opacity: 1 }} />
          {/* Logo */}
          <a href="/" className="sprited logo" data-track-label="Logo">
            Chaussures et sacs sarenza.com
          </a>
          <nav
            id="MainNav-RD"
            className={cn({
              open: openMenu,
              level2: openTab
            })}>
            <a className="back" href="#0">
              Menu
            </a>
            <span
              className="closer"
              role="button"
              tabIndex={-1}
              onKeyPress={() => {}}
              onClick={() => {
                setOpenMenu((show) => !show);
              }}>
              Fermer
            </span>
            <div className="inner-scroll">
              <ul
                className={cn('menu-group-list', {
                  active: isActive === true
                })}
                style={{
                  left: openTab ? '-320px' : '0',
                  height: openTab ? '10px' : 'auto',
                  display: openTab ? 'none' : 'flex'
                }}>
                {genders.map((gender) => {
                  return (
                    <li
                      data-menu-group={gender.id}
                      className={cn('group-tab', {
                        active: isActive === gender.id
                      })}
                      onClick={() => addActive(gender.id)}
                      key={gender.id}
                      role="menuitem"
                      onKeyPress={() => {}}
                      tabIndex={-2}>
                      <a
                        href={`/chaussure-${gender.gender.toLowerCase()}`}
                        onClick={() => {}}
                        onKeyPress={() => {}}
                        tabIndex={-3}>
                        {gender.gender}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul
                className="main-list"
                style={{
                  left: openTab ? '-320px' : '0',
                  height: openTab ? '0' : 'auto'
                }}>
                {/* [RD] - MegaMenu Item men: début */}

                {menus.map((menu) => {
                  return (
                    <li
                      className={`menu-group${styles['menu-group']}`}
                      onClick={() => {
                        if (!openTab) {
                          setOpenTab(menu.id);
                        }
                      }}
                      data-menu-group={2}
                      key={menu.id}
                      role="menuitem"
                      onKeyPress={() => {}}
                      tabIndex={-4}>
                      <a className="tab" data-promo data-ea>
                        {menu.header.name}
                      </a>
                      <SubMenu
                        data={menu.items}
                        tabId={openTab}
                        menuId={menu.id}
                        setId={(v) => {
                          setOpenTab(undefined);
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
              <div id="UserNavPlaceholder" />
            </div>
          </nav>
          {/* Site navigation - End */}
          {/* Search */}
          <form className="search-form" action="/store/product/search/list/view" method="get">
            <input type="hidden" className="search-origin" name="origin" defaultValue="s" />
            <input
              autoComplete="off"
              autoCorrect="off"
              className="suggest"
              placeholder="Je veux des pantalons..."
              type="search"
              name="search"
            />
            <button className="pictenza pictenza-search" type="submit" />
          </form>
          <ul className="user-nav">
            <li className="account">
              <a href="/user/view" className="pictenza pictenza-account">
                <span data-rsx="Connecté">Compte</span>
              </a>
            </li>
            {/* Alerts */}
            <li className="alerts">
              <a href="/customer/alert/new/view" className="pictenza pictenza-alerts">
                <span>Alertes</span>
              </a>
            </li>
            {/* Favorites */}
            <li className="favorites">
              <a
                data-encrypted="L2N1c3RvbWVyL2Zhdm9yaXRlL2xpc3Qvdmlldw=="
                className="pictenza pictenza-favorites decrypt"
                href="/customer/favorite/list/view">
                <span>Mes favoris</span>
              </a>
            </li>
            {/* Cookies */}
            <li className="cookies">
              <a className="pictenza pictenza-cookie cookie-set">
                <span>Mes cookies</span>
              </a>
            </li>
            {/* Basket */}
            <li className="basket">
              <a href="/checkout/basket/view" className="pictenza pictenza-basket">
                <span>Panier</span>
              </a>
            </li>
          </ul>
          {/* User navigation - End */}
        </div>
      </header>
    </div>
  );
};

export default Menu;
