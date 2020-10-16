import BlockLinks from 'components/Footer/components/BlockLinks/BlockLinks';
import CountrySelector from 'components/Footer/components/CountrySelector/CountrySelector';
import FooterLink from 'components/Footer/components/FooterLink/FooterLink';
import NeedHelp from 'components/Footer/components/NeedHelp/NeedHelp';
import Newsletter from 'components/Footer/components/Newsletter/Newsletter';
import PartnerIcon from 'components/Footer/components/PartnerIcon/PartnerIcon';
import Reassurances from 'components/Footer/components/Reassurances/Reassurances';
import Reviews from 'components/Footer/components/Reviews/Reviews';
import SocialMedia from 'components/Footer/components/SocialMedia/SocialMedia';
import VariousText from 'components/Footer/components/VariousText/VariousText';
import React, { useEffect, useState } from 'react';

import getFooter from './service/footer.service';

const Footer = () => {
  const [footer, setFooter] = useState(null);
  useEffect(() => {
    async function fetch() {
      const data = await getFooter();
      setFooter(data);
    }
    fetch();
  }, []);

  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    footer && (
      <footer id="MainFooter" data-track-zone="Transverse" className="gtm-zone">
        <ul className="advantages10reasons">
          {footer.reassurances.map((reassurance) => {
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
            <div className="title-nav">{footer.blockLinks.slice(3, 4)[0].title}</div>
            <ul className="list">
              {footer.blockLinks.slice(3, 4)[0].links.map((item) => {
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
            {footer.partnerIcons.map((partnerIcon) => {
              return <PartnerIcon data={partnerIcon} key={partnerIcon.id} />;
            })}
          </ul>
        </div>
        <div className="legal">
          <ul className="legal-navigation">
            {footer.footerLinks.map((footerLink) => {
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
      </footer>
    )
  );
};

export default Footer;
