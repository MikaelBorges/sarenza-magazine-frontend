import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import { getMenu } from '../../strapi/strapi.service';
import SubMenu from './subMenu';

{/**
****
** MODE DESKTOP
*
* border du bas manquante : ciblée avec la class active qui est ajoutée en JS sur menu-group au hover
* overlay qui apprait par dessus le contenu du site au hover également ciblé aussi avec la class active
* -> voir pour ajouter la class active au hover, pas possible en CSS car elle s'ajoute à l'élément parent (menu-group)
*
* Genres pas bon dans le megamenu :
* Actuellement : Genre / Femme / Homme / Enfant / Encore plus de nouveautés
* En vrai : Genre / Femme / Homme / Enfant
* + style des liens femme / homme / enfant incorrect
* -> ajouter la class "all" au "li" de ces liens en plus de la class "link"
* -> retirer le lien "Encore plus de nouveautés"
*
* MODE TABLETTE
*
* Attention au contour noir qui se met lorsqu'on clique sur l'icône du menu et le bouton fermer
* -> mettre un "outline: none" au focus de l'élément
*
* Manque la user nav avec les liens d'accès à mon compte... 
*
* Le menu Homme est actif alors qu'on sera non genré, il faut qu'il soit inactif
*
* Les menus Femme / homme / enfant sont sur fond gris, il devraient être sur fond blanc
*
* A l'inverse les liens Nouveautés... doivent être sur fond gris
*
* Lorsqu'on clique sur un de ces liens il y a une animation qui affiche le sous menu associé avec cette fois les liens sur fond blanc
* Attention dans ce sous-menu, certains peuvent se déplier
*
*
*
*
* Mettre les liens avec le domaine car je ne suis pas sûr qu'on sera sur le même domaine (peut-être  un magazine.sarenza.com, à voir)
*
* Prévoir le lien rose (ex actuellement Fin de collection) :
* N'a pas de megamenu c'est juste un lien
* class "promo" ajoutée après la class "tab"
*
****
*/}

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
                                            key={menu.id}>
                                            <a
                                                className="tab  "
                                                data-promo
                                                data-ea
                                                href="/chaussure-nouvelle-collection-homme">
                                                {menu.header.name}
                                            </a>
                                            <SubMenu data={menu.items} />
                                        </li>
                                    );
                                })}
                            </ul>
                            <div id="UserNavPlaceholder" />
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
                        <li data-partner>
                            {/* module partner-picto */}
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
                                    <a href="/user/view?zone=returns">
                                        Suivre mes retours et remboursements
                                    </a>
                                </li>
                                <li>
                                    <a href="/user/view?zone=addresses">
                                        Mon carnet d&lsquo;adresses
                                    </a>
                                </li>
                                <li>
                                    <a href="/user/view?zone=user-infos">
                                        Mes informations de connexion
                                    </a>
                                </li>
                                <li>
                                    <a href="/customer/alert/new/view">Alertes</a>
                                </li>
                                <li>
                                    <a href="/user/view?zone=newsletters">
                                        Mes Newsletters et Alertes
                                    </a>
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
                                Créez vos alertes pour recevoir chaque semaine par mail les
                                dernières nouveautés de vos marques préférées.
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
