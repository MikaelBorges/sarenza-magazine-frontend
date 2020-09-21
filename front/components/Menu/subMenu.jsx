import React from 'react';

const SubMenu = ({ data, className }) => {
    return (
        <div className={'sub' + className}>
            <div className="sub-inner">
                <a className="back" href="#0">
                    Retour
                </a>
                <a
                    className="root  "
                    data-promo
                    data-ea
                    href="/chaussure-nouvelle-collection-homme">
                    Afficher tout
                </a>
                {data.map((item) => {
                    return (
                        <div className="col" key={item.id}>
                            <span className="title">
                                <span>{item.category}</span>
                            </span>
                            <ul className="list">
                                {item.links.map((link) => {
                                    return (
                                        <li className="link" key={link.label}>
                                            <a href={item.link}>{link.label}</a>
                                        </li>
                                    );
                                })}

                                <li className="all">
                                    <a href="/chaussure-nouvelle-collection-homme" data-ea>
                                        Encore plus de nouveautés
                                    </a>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SubMenu;
