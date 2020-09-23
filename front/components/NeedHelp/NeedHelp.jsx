import React from 'react';

const NeedHelp = ({ data }) => {
    return !data ? (
        <div>Loading...</div>
    ) : (
        <div className="help">
            <div className="Sc">
                <div className="title-level3">{data.title}</div>
                <div className="content-Sc">
                    <div className="infos-SC">
                        <p>{data.text}</p>
                        <ul className="cta-faq">
                            {data.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="title" key={link.label}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mobile-app no-background">
                <div className="title-level3">
                    <span style={{ color: 'red' }}>#NeRienLaisserPasser</span>
                    <br />
                    Victime ou témoin de violences conjugales ?
                </div>
                <p>
                    Appel au 17 ou SMS alerte au 114 <br /> Service d&apos;écoute au 3919 du lundi
                    au samedi de 9h à 19h <br /> Signalement sur{' '}
                    <a href="https://arretonslesviolences.gouv.fr" target="_blank" rel="noreferrer">
                        arretonslesviolences.gouv.fr
                    </a>
                </p>
            </div>
        </div>
    );
};

export default NeedHelp;
