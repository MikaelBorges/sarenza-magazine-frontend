import BlockLinks from 'modules/Footer/components/BlockLinks/BlockLinks';
import CountrySelector from 'modules/Footer/components/CountrySelector/CountrySelector';
import FooterLink from 'modules/Footer/components/FooterLink/FooterLink';
import NeedHelp from 'modules/Footer/components/NeedHelp/NeedHelp';
import Newsletter from 'modules/Footer/components/Newsletter/Newsletter';
import PartnerIcon from 'modules/Footer/components/PartnerIcon/PartnerIcon';
import Reassurances from 'modules/Footer/components/Reassurances/Reassurances';
import Reviews from 'modules/Footer/components/Reviews/Reviews';
import SocialMedia from 'modules/Footer/components/SocialMedia/SocialMedia';
import VariousText from 'modules/Footer/components/VariousText/VariousText';
import React, { useState } from 'react';

import { StyleFooter } from './StyleFooter/StyleFooter';

const Footer = ({ footer }) => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return footer ? (
    <footer id="MainFooter" data-track-zone="Transverse" className="gtm-zone">
      <ul className="advantages10reasons">
        {footer.reassurances &&
          footer.reassurances.map((reassurance) => {
            return <Reassurances data={reassurance} key={reassurance.id} />;
          })}
      </ul>
      <Newsletter data={footer.newsletter} />
      <div className="help">
        <NeedHelp data={footer.needHelp} />
        <VariousText data={footer.variousText} />
      </div>
      <nav className="footer-nav" role="navigation">
        <div className="col avis">
          <Reviews data={footer.review} />
        </div>
        <BlockLinks data={footer.blockLinks} />
        <div className="col">
          <div className="title-nav">
            {footer.blockLinks && footer.blockLinks.slice(3, 4)[0].title}
          </div>
          <ul className="list">
            {footer.blockLinks &&
              footer.blockLinks.slice(3, 4)[0].links.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.href} className="ea-tracker gtm-click" data-ea>
                      {item.label}
                    </a>
                  </li>
                );
              })}
          </ul>
          <SocialMedia data={footer.socialMedia} />
        </div>
      </nav>
      <div className="partners">
        <ul className="fold sprite">
          {footer.partnerIcons &&
            footer.partnerIcons.map((partnerIcon, index) => {
              return <PartnerIcon data={partnerIcon} key={`${partnerIcon.id}-${index}`} />;
            })}
        </ul>
      </div>
      <div className="legal">
        <ul className="legal-navigation">
          {footer.footerLinks &&
            footer.footerLinks.map((footerLink) => {
              return <FooterLink data={footerLink} key={footerLink.id} />;
            })}
        </ul>
        <div
          className={isActive ? 'country-selector' : 'open country-selector'}
          onClick={handleToggle}
          onKeyDown={handleToggle}
          role="button"
          tabIndex="0">
          <CountrySelector data={footer.countrySelectors} />
        </div>
      </div>
      {typeof window !== 'undefined' && <StyleFooter />}
    </footer>
  ) : null;
};

export default Footer;
