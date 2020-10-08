import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import { getMenu } from '../../strapi/strapi.service';
import SubMenu from './subMenu';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        async function fetch() {
            const menus = await getMenu();
            setMenus(menus);
        }
        fetch();
    }, []);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        let overlay = document.getElementById('MainNavOverlay');
        if (openMenu) {
            overlay.style.display = 'block';
            overlay.style.transition = 'opacity 1s ease 0s';
        } else {
            overlay.style.display = 'none';
            overlay.style.transition = 'opacity 1s ease 0s';
        }
    }, [openMenu]);

    // const testRef = useRef();

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
                            ['open']: openMenu
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
                            <ul className="menu-group-list  active">
                                <li data-menu-group={1} className="group-tab ">
                                    <a href="/chaussure-femme">Femme</a>
                                </li>
                                <li data-menu-group={2} className="group-tab active">
                                    <a href="/chaussure-homme">Homme</a>
                                </li>
                                <li data-menu-group={3} className="group-tab ">
                                    <a href="/chaussure-enfant">Enfant</a>
                                </li>
                                <li data-menu-group={1} className="group-root ">
                                    <a href="/chaussure-femme">Inspiration</a>
                                </li>
                                <li data-menu-group={2} className="group-root active">
                                    <a href="/chaussure-homme">Inspiration</a>
                                </li>
                                <li data-menu-group={3} className="group-root ">
                                    <a href="/chaussure-enfant">Inspiration</a>
                                </li>
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
                                            className="menu-group"
                                            data-menu-group={2}
                                            key={menu.id} /*onClick={() => testRef.current}*/
                                        >
                                            <a
                                                className="tab"
                                                data-promo
                                                data-ea
                                                href="/chaussure-nouvelle-collection-homme">
                                                {menu.header.name}
                                            </a>
                                            <SubMenu data={menu.items} /*ref={testRef}*/ />
                                        </li>
                                    );
                                })}
                            </ul>
                            <div id="UserNavPlaceholder"></div>
                        </div>
                    </nav>
                    {/* Site navigation - End */}
                    {/* Search */}
                    <form
                        className="search-form"
                        action="/store/product/search/list/view"
                        method="get">
                        <input
                            type="hidden"
                            className="search-origin"
                            name="origin"
                            defaultValue="s"
                        />
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
