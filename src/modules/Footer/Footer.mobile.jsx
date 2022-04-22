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
import React from 'react';

import StyleFooter from './StyleFooter/StyleFooter.mobile';

const FooterMobile = ({ footer }) => {
  return footer ? (
    <footer id="MainFooter">
      <ul className="advantages10reasons gtm-zone" data-track-zone="advantages10reasons">
        {footer.reassurances &&
          footer.reassurances.map((reassurance) => {
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
        {footer.blockLinks &&
          footer.blockLinks.map((blockLink) => {
            return <BlockLinksMobile data={blockLink} key={blockLink.id} />;
          })}

        <PartnerIconMobile data={footer.partnerIcons} />

        <CountrySelectorMobile data={footer.countrySelectors} />
      </nav>

      <ul className="legal-navigation">
        {footer.footerLinks &&
          footer.footerLinks.map((footerLink) => {
            return <FooterLinkMobile data={footerLink} key={footerLink.id} />;
          })}
      </ul>
      <SocialMediaMobile data={footer.socialMedia} />

      {typeof window !== 'undefined' && <StyleFooter />}
    </footer>
  ) : (
    <></>
  );
};

export default FooterMobile;
