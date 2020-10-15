import React, { useState } from 'react';

const SubMenu = ({ data, tabId, menuId, setId }) => {
    const [listOpen, addList] = useState(false);

    /*className={cn("sub-inner", {
                ['visible']: tabId 
            })} */
    return (
        <div className="sub">
            <div className="sub-inner" style={{ display: tabId === menuId ? 'block' : 'none' }}>
                <a
                    className="back"
                    href="#0"
                    onClick={() => setId(tabId)}
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
                                <span
                                    className="title"
                                    onClick={() => addList(itemFiltered.id, !listOpen)}
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
