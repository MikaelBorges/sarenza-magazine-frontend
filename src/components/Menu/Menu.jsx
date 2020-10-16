import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import getGender from './service/gender.service';
import getMenu from './service/menu.service';
import SubMenu from './subMenu';

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    async function fetch() {
      const menu = await getMenu();
      setMenus(menu);
    }
    fetch();
  }, []);

  const [genders, setGenders] = useState([]);
  useEffect(() => {
    async function fetch() {
      const gender = await getGender();
      setGenders(gender);
    }
    fetch();
  }, []);

  const [openMenu, setOpenMenu] = useState(false);

  const [isActive, addActive] = useState();

  const [isHover, addHover] = useState(false);

  useEffect(() => {
    const overlay = document.getElementById('MainNavOverlay');
    if (isHover) {
      overlay.style.display = 'block';
      overlay.style.transition = 'opacity 1s ease 0s';
    } else {
      overlay.style.display = 'none';
      overlay.style.transition = 'opacity 1s ease 0s';
    }
  }, [isHover]);

  if (!menus && menus.length) {
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
              open: openMenu
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
                  active: isActive
                })}>
                {genders.map((gender) => {
                  return (
                    <li
                      data-menu-group={gender.id}
                      className={cn('group-tab', {
                        active: isActive === gender.id
                      })}
                      role="menuitem"
                      onKeyPress={() => {}}
                      tabIndex={-2}
                      onClick={() => addActive(gender.id)}
                      key={gender.id}>
                      <a
                        href="/chaussure-"
                        onClick={(e) => {
                          e.preventDefault();
                        }}>
                        {gender.gender}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className="main-list">
                {/* [RD] - MegaMenu Item men: début */}
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n      .Picto1:after{ content:' New'; color:#ff2157; font-size:10px;margin:2px 0 0 6px;position:absolute;text-transform:uppercase;}\n\n"
                  }}
                />
                {menus.map((menu) => {
                  return (
                    <li
                      className={cn('menu-group', {
                        'active animate': isHover === menu.id
                      })}
                      role="menuitem"
                      onMouseEnter={() => addHover(menu.id)}
                      onMouseLeave={() => addHover('')}
                      onKeyPress={() => {}}
                      tabIndex={-4}
                      data-menu-group={menu.id}
                      key={menu.id}
                      style={{ transition: 'opacity 1s ease 0s' }}>
                      <a
                        className="tab"
                        data-promo
                        data-ea
                        href="/chaussure-nouvelle-collection-homme">
                        {menu.header.name}
                      </a>
                      <SubMenu data={menu.items} tabActivate={isActive} />
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
            <li data-partner>
              {/* module partner-picto */}
              <style />
              <a
                className="pictenza pictenza-chat ea-tracker"
                data-ea
                href="/faq"
                target="_blank"
                rel="noopener nofollow">
                <span>FAQ</span>
              </a>
              {/* module partner-picto End */}
            </li>
            {/* Account */}
            <li className="account">
              <a href="/user/view" className="pictenza pictenza-account">
                <span data-rsx="Connecté">Compte</span>
              </a>
              {/* User layer */}
              <ul className="account-layer">
                <li className="sign-in">
                  <a className="east" href="/auth/sign-in/view">
                    Se connecter
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=orders">Voir mes commandes</a>
                </li>
                <li>
                  <a href="/user/view?zone=orders">Faire un retour</a>
                </li>
                <li>
                  <a href="/user/view?zone=returns">Suivre mes retours et remboursements</a>
                </li>
                <li>
                  <a href="/user/view?zone=addresses">Mon carnet d&lsquo;adresses</a>
                </li>
                <li>
                  <a href="/user/view?zone=user-infos">Mes informations de connexion</a>
                </li>
                <li>
                  <a href="/customer/alert/new/view">Alertes</a>
                </li>
                <li>
                  <a href="/user/view?zone=newsletters">Mes Newsletters et Alertes</a>
                </li>
                <li>
                  <a className="cookie-set">Mes cookies</a>
                </li>
                <li>
                  <a href="/user/view?zone=vouchers">Mes bons d&lsquo;achat</a>
                </li>
              </ul>
            </li>
            {/* Alerts */}
            <li className="alerts tooltip-parent">
              <a href="/customer/alert/new/view" className="pictenza pictenza-alerts">
                <span>Alertes</span>
              </a>
              <div className="tooltip">
                <span className="pictenza pictenza-cancel" />
                <span className="mighty">DECOUVREZ LES ALERTES NOUVEAUTES</span>
                Créez vos alertes pour recevoir chaque semaine par mail les dernières nouveautés de
                vos marques préférées.
              </div>
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
