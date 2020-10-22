import BlockLinksMobile from 'modules/Footer/components/BlockLinks/BlockLinks.mobile';
import CountrySelectorMobile from 'modules/Footer/components/CountrySelector/CountrySelector.mobile';
import FooterLinkMobile from 'modules/Footer/components/FooterLink/FooterLink.mobile';
import NeedHelpMobile from 'modules/Footer/components/NeedHelp/NeedHelp.mobile';
import NewsletterMobile from 'modules/Footer/components/Newsletter/Newsletter.mobile';
import PartnerIconMobile from 'modules/Footer/components/PartnerIcon/PartnerIcon.mobile';
import ReassurancesMobile from 'modules/Footer/components/Reassurances/Reassurances.mobile';
import ReviewsMobile from 'modules/Footer/components/Reviews/Reviews.mobile';
import SocialMediaMobile from 'modules/Footer/components/SocialMedia/SocialMedia.mobile';
import VariousTextMobile from 'modules/Footer/components/VariousText/VariousText.mobile';
import React, { useEffect, useState } from 'react';

import getFooter from './service/footer.service';

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
