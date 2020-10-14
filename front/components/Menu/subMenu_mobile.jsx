import React from 'react';

const SubMenu = ({ data, tabId, menuId, setId }) => {
    return (
        <div className="sub">
            <div className="sub-inner" style={{ display: tabId === menuId ? 'block' : 'none' }}>
                <a
                    className="back"
                    href="#0"
                    onClick={() => setId()}
                    role="button"
                    onKeyPress={() => {}}
                    tabIndex={0}>
                    Retour
                </a>
                <a className="root" data-promo data-ea>
                    Afficher tout
                </a>
                {data
                    .filter((item) => item.category != 'Genre')
                    .map((itemFiltered) => {
                        return (
                            <div className="col" key={itemFiltered.id}>
                                <span className="title">
                                    <span>{itemFiltered.category}</span>
                                </span>
                                <ul className="list">
                                    {itemFiltered.links.map((link) => {
                                        return (
                                            <li className={'link'} key={link.label}>
                                                <a href={link.link}>{link.label}</a>
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
