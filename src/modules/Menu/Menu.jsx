import cn from 'classnames';
import React, { useEffect, useState, useRef } from 'react';
import SubMenu from './subMenu';
import useGTM from 'utils/useGTM';

const Menu = ({ menus, genders }) => {
  const trackMenu = useRef();

  const trackGTM = (eventAction, eventLabel, eventName) => {
    let obj = {
      event: eventName,
      eventCategory: 'Click',
      eventAction: eventAction,
      eventLabel: eventLabel
    };
    useGTM(obj, eventName);
  };

  const [openMenu, setOpenMenu] = useState(false);

  const [isActive, addActive] = useState();

  const [isHover, addHover] = useState(false);

  useEffect(() => {
    {
      const overlay = document.getElementById('MainNavOverlay');
      if (isHover && menus.find((i) => i.header.id === isHover).items.length > 0) {
        overlay.style.display = 'block';
        overlay.style.transition = 'opacity 1s ease 0s';
      } else if (overlay) {
        overlay.style.display = 'none';
        overlay.style.transition = 'opacity 1s ease 0s';
      }
    }
  }, [isHover]);

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
              trackGTM('Menu', 'Open Menu', 'click');
            }}
            ref={trackMenu}>
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
                trackGTM('Menu', 'Close Menu', 'click');
              }}
              ref={trackMenu}>
              Fermer
            </span>
            <div className="inner-scroll">
              <ul
                className={cn('menu-group-list', {
                  active: isActive
                })}>
                {genders &&
                  genders.map((gender) => {
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
                          href={`/chaussure-${gender.gender.toLowerCase()}`}
                          onClick={() => {
                            trackGTM('Menu', `/chaussure-${gender.gender.toLowerCase()}`, 'click');
                          }}
                          ref={trackMenu}>
                          {gender.gender}
                        </a>
                      </li>
                    );
                  })}
              </ul>
              <ul className="main-list">
                {/* [RD] - MegaMenu Item men: d??but */}
                {menus.map((menu) => {
                  return (
                    <li
                      className={cn('menu-group', {
                        'active animate': isHover === menu.header.id
                      })}
                      role="menuitem"
                      onMouseEnter={() => addHover(menu.header.id)}
                      onMouseLeave={() => addHover('')}
                      onKeyPress={() => {}}
                      tabIndex={-4}
                      data-menu-group={menu.header.id}
                      key={menu.header.id}
                      style={{ transition: 'opacity 1s ease 0s' }}>
                      <a
                        className="tab"
                        data-promo
                        data-ea
                        href={menu.url}
                        style={{ color: menu.colorText || 'inherit' }}
                        ref={trackMenu}
                        onClick={() => {
                          trackGTM('Menu', `${menu.url}`, 'click');
                        }}>
                        {menu.header.name}
                      </a>
                      {menu.items.length > 0 && (
                        <SubMenu data={menu.items} tabActivate={isActive} />
                      )}
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
              onChange={(e) => {
                // setSearch(e.target.value)
              }}
              onKeyDown={(e) => {
                // setSearch(e.target.value)
              }}
            />
            <button
              className="pictenza pictenza-search"
              type="submit"
              onClick={(e) => {
                // e.preventDefault()
                // trackSearch()
              }}
              ref={trackMenu}
            />
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
                rel="noopener nofollow"
                ref={trackMenu}
                onClick={() => {
                  trackGTM('Menu', 'FAQ', 'click');
                }}>
                <span>FAQ</span>
              </a>
              {/* module partner-picto End */}
            </li>
            {/* Account */}
            <li className="account">
              <a
                href="/user/view"
                className="pictenza pictenza-account"
                ref={trackMenu}
                onClick={() => {
                  trackGTM('Menu', 'Compte', 'click');
                }}>
                <span data-rsx="Connect??">Compte</span>
              </a>
              {/* User layer */}
              <ul className="account-layer">
                <li className="sign-in">
                  <a
                    className="east"
                    href="/auth/sign-in/view"
                    ref={trackMenu}
                    onClick={() => {
                      trackGTM('Menu', 'Se connecter', 'click');
                    }}>
                    Se connecter
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=orders" ref={trackMenu} onClick={() => {}}>
                    Voir mes commandes
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=orders" ref={trackMenu} onClick={() => {}}>
                    Faire un retour
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=returns" ref={trackMenu} onClick={() => {}}>
                    Suivre mes retours et remboursements
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=addresses" ref={trackMenu} onClick={() => {}}>
                    Mon carnet d&lsquo;adresses
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=user-infos" ref={trackMenu} onClick={() => {}}>
                    Mes informations de connexion
                  </a>
                </li>
                <li>
                  <a href="/customer/alert/new/view" ref={trackMenu} onClick={() => {}}>
                    Alertes
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=newsletters" ref={trackMenu} onClick={() => {}}>
                    Mes Newsletters et Alertes
                  </a>
                </li>
                <li>
                  <a className="cookie-set" ref={trackMenu} onClick={() => {}}>
                    Mes cookies
                  </a>
                </li>
                <li>
                  <a href="/user/view?zone=vouchers" ref={trackMenu} onClick={() => {}}>
                    Mes bons d&lsquo;achat
                  </a>
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
                Cr??ez vos alertes pour recevoir chaque semaine par mail les derni??res nouveaut??s de
                vos marques pr??f??r??es.
              </div>
            </li>
            {/* Favorites */}
            <li className="favorites">
              <a
                data-encrypted="L2N1c3RvbWVyL2Zhdm9yaXRlL2xpc3Qvdmlldw=="
                className="pictenza pictenza-favorites decrypt"
                href="/customer/favorite/list/view"
                ref={trackMenu}
                onClick={() => {
                  trackGTM('Menu', 'Mes favoris', 'click');
                }}>
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
              <a
                href="/checkout/basket/view"
                className="pictenza pictenza-basket"
                ref={trackMenu}
                onClick={() => {
                  trackGTM('Menu', 'Panier', 'click');
                }}>
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
