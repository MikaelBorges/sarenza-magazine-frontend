import React, { useEffect, useState } from 'react';
import getFooter from 'strapi/strapi.service';

import BlockLinksMobile from '../BlockLinks/BlockLinks.mobile';
import CountrySelectorMobile from '../CountrySelector/CountrySelector.mobile';
import FooterLinkMobile from '../FooterLink/FooterLink.mobile';
import NeedHelpMobile from '../NeedHelp/NeedHelp.mobile';
import NewsletterMobile from '../Newsletter/Newsletter.mobile';
import PartnerIconMobile from '../PartnerIcon/PartnerIcon.mobile';
import ReassurancesMobile from '../Reassurances/Reassurances.mobile';
import ReviewsMobile from '../Reviews/Reviews.mobile';
import SocialMediaMobile from '../SocialMedia/SocialMedia.mobile';
import VariousTextMobile from '../VariousText/VariousText.mobile';

const FooterMobile = () => {
  const [footer, setFooter] = useState(null);
  useEffect(() => {
    async function fetch() {
      const data = await getFooter();
      setFooter(data);
    }
    fetch();
  }, []);

  return (
    footer && (
      <footer id="MainFooter">
        <ul className="advantages10reasons gtm-zone" data-track-zone="advantages10reasons">
          {footer.reassurances.map((reassurance) => {
            return <ReassurancesMobile data={reassurance} key={reassurance.id} />;
          })}
        </ul>
        <section className="help">
          <NeedHelpMobile data={footer.needHelp} />
        </section>
        <NewsletterMobile data={footer.newsletter} />
        <VariousTextMobile data={footer.variousText} />
        <ReviewsMobile data={footer.review} />

        <nav className="footer-nav" role="navigation">
          {footer.blockLinks.map((blockLink) => {
            return <BlockLinksMobile data={blockLink} key={blockLink.id} />;
          })}
          {footer.partnerIcons.map((partnerIcon) => {
            return <PartnerIconMobile data={partnerIcon} key={partnerIcon.id} />;
          })}
          <CountrySelectorMobile data={footer.countrySelectors} />
        </nav>

        <ul className="legal-navigation">
          {footer.footerLinks.map((footerLink) => {
            return <FooterLinkMobile data={footerLink} key={footerLink.id} />;
          })}
        </ul>
        <SocialMediaMobile data={footer.socialMedia} />
      </footer>
    )
  );
};

export default FooterMobile;
