/* eslint-disable */

export const StyleFooter = () => {
  return (
    <style jsx global>
      {`
        #MainFooter {
          margin-top: 32px;
        }
        #MainFooter .advantages10reasons {
          margin: 0 auto 48px;
          padding: 0;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          max-width: 1008px;
        }
        #MainFooter .advantages10reasons > li {
          margin: 0;
          list-style: none;
          width: 25%;
          display: flex;
          justify-content: center;
          align-content: center;
          text-align: center;
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-size: 14px;
          color: #000;
          line-height: 18px;
          padding: 0 15px;
          flex-flow: row wrap;
          font-weight: 700;
        }
        #MainFooter .advantages10reasons > li.pictenza:before {
          content: '\\e634';
          font-size: 40px;
          line-height: 25px;
          margin: 0 0 20px;
          width: 100%;
        }
        #MainFooter .newsletter .nl-subtitle,
        #MainFooter .newsletter .nl-subtitle + p {
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-size: 14px;
        }
        #MainFooter .advantages10reasons > li.pictenza:nth-child(2n):before {
          content: '\\e634';
        }
        #MainFooter .advantages10reasons > li.pictenza.delivery:before {
          content: '\\e602';
        }
        #MainFooter .advantages10reasons > li.pictenza.delivery24:before {
          content: '\\e6bc';
        }
        #MainFooter .advantages10reasons > li.pictenza.delivery48:before {
          content: '\\e6be';
        }
        #MainFooter .advantages10reasons > li.pictenza.customs:before {
          content: '\\e700';
        }
        #MainFooter .advantages10reasons > li.pictenza.return:before {
          content: '\\e6ba';
        }
        #MainFooter .advantages10reasons > li.pictenza.return100:before {
          content: '\\e701';
        }
        #MainFooter .advantages10reasons > li.pictenza.return30:before {
          content: '\\e702';
        }
        #MainFooter .advantages10reasons > li.pictenza.customer-service:before {
          content: '\\e6bb';
        }
        #MainFooter .advantages10reasons > li.pictenza.payment:before {
          content: '\\e6b9';
        }
        #MainFooter .advantages10reasons > li.pictenza.secured:before {
          content: '\\e646';
        }
        #MainFooter .advantages10reasons > li.pictenza.billing:before {
          content: '\\e685';
        }
        #MainFooter .advantages10reasons > li.pictenza.brand:before {
          content: '\\e696';
        }
        #MainFooter .newsletter {
          padding: 46px 37px 36px;
          border-top: 1px solid #f2f2f2;
        }
        #MainFooter .newsletter .nl-subtitle {
          padding-top: 8px;
          text-transform: uppercase;
          font-weight: 700;
        }
        #MainFooter .newsletter .nl-subtitle + p {
          color: #000;
          text-align: center;
          margin: 8px 0;
        }
        #MainFooter .subscribe-newsletter .title-level1 {
          color: #ff2157;
          text-align: center;
        }
        #MainFooter .subscribe-newsletter .title-level1:before {
          font-family: pictenza;
          content: '\\e600';
          font-weight: 400;
          font-size: 40px;
          display: inline-block;
          padding: 0 12px 0 0;
        }
        #MainFooter .subscribe-newsletter .field {
          width: 50%;
          display: inline-block;
          margin: 0 8px 0 0;
        }
        #MainFooter .subscribe-newsletter .field > input[type='email'] {
          padding: 3px 15px;
          width: 100%;
          max-width: 335px;
          border: 1px solid #d5d5d5;
          outline: 0;
          border-radius: 2px;
          font-family: robotoc, 'Arial Narrow', sans-serif;
          color: #000;
        }
        #MainFooter .subscribe-newsletter .field > label {
          text-transform: uppercase;
          font-size: 10px;
          line-height: 1em;
          font-family: robotoc, 'Arial Narrow', sans-serif;
          color: #737373;
          display: block;
          text-align: left;
          padding-bottom: 8px;
        }
        #MainFooter .subscribe-newsletter .fields-nl {
          display: flex;
          margin: 26px 0 16px;
          position: relative;
        }
        #MainFooter .subscribe-newsletter .button {
          display: inline-block;
          width: 30%;
          max-width: 165px;
          padding: 3px 15px;
          margin: 18px 8px 0;
        }
        #MainFooter .subscribe-newsletter .legal-message {
          position: relative;
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-size: 9px;
          color: #999;
          text-align: center;
          line-height: 12px;
          margin: 16px 0 0;
        }
        #MainFooter .subscribe-newsletter .legal-message > a {
          color: #999;
        }
        #MainFooter .subscribe-newsletter .legal-message .tooltip-parent {
          color: #737373;
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-size: 12px;
          position: relative;
          cursor: pointer;
          text-decoration: underline;
          width: 250px;
          margin: 16px auto;
        }
        #MainFooter .subscribe-newsletter .legal-message .tooltip-parent .tooltip {
          display: inline-block;
          width: 526px;
          margin: 10px 0 0 -256px;
          font-size: 12px;
          right: 0;
          top: auto;
          bottom: 105%;
          text-transform: initial;
          font-weight: 400;
          background: #f2f2f2;
          z-index: 1;
          border-bottom: 8px solid #fff;
        }
        #MainFooter .subscribe-newsletter .legal-message .tooltip-parent .tooltip .title-level4 {
          display: block;
          color: #1d1d1b;
          margin-bottom: 16px;
          font-family: robotoc, 'Arial Narrow', sans-serif;
          text-transform: uppercase;
          font-size: 18px;
        }
        #MainFooter .subscribe-newsletter .legal-message .tooltip-parent .tooltip > a {
          color: #737373;
        }
        #MainFooter .subscribe-newsletter .legal-message .tooltip-parent .tooltip:before {
          display: none;
        }
        #MainFooter .subscribe-newsletter .legal-message .link {
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-size: 9px;
          color: #999;
        }
        #MainFooter small.error,
        #MainFooter small.success {
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-size: 14px;
          margin: 8px 0 0;
          display: block;
          text-align: left;
        }
        #MainFooter small.error:before,
        #MainFooter small.success:before {
          font-family: pictenza;
          display: inline-block;
          border-radius: 50%;
          background: #46cd63;
          color: #fff;
          content: '\\e67A';
          width: 16px;
          height: 16px;
          font-size: 14px;
          text-align: center;
          line-height: 12px;
          margin-right: 8px;
        }
        #MainFooter small.success {
          position: absolute;
          top: 69px;
        }
        #MainFooter small.success:before {
          background: #46cd63;
          content: '\\e67A';
        }
        #MainFooter small.error {
          color: #ff4747;
        }
        #MainFooter small.error:before {
          background: #ff4747;
          content: '\\e67B';
          position: static;
          border: 0;
          font-size: 16px;
          line-height: 11px;
        }
        #MainFooter .help .Sc .msgSC,
        #MainFooter .help .cta-faq > li > a,
        #MainFooter .help .infos-SC > p {
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-size: 14px;
        }
        #MainFooter .help {
          border-top: 2px solid #f2f2f2;
          display: flex;
          flex-flow: wrap;
        }
        #MainFooter .help .Sc {
          padding: 40px 24%;
          position: relative;
          width: 100%;
        }
        #MainFooter .help .Sc .title-level3 {
          margin: 0 0 16px;
        }
        #MainFooter .help .Sc .msgSC {
          color: #ff2157;
          text-align: left;
          margin: 16px 0;
        }
        #MainFooter .help .content-Sc {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        #MainFooter .help .infos-SC {
          width: 50%;
        }
        #MainFooter .help .infos-SC > p {
          color: #737373;
          text-align: left;
          line-height: 20px;
          padding: 0;
          margin: 0 0 16px;
          word-break: break-word;
        }
        #MainFooter .help .infos-SC > ul {
          padding: 0;
          margin: 0;
          width: 100%;
        }
        #MainFooter .help .infos-SC > ul > li {
          list-style: none;
        }
        #MainFooter .help .cta-faq > li {
          list-style: none;
          text-align: left;
        }
        #MainFooter .help .cta-faq > li > a {
          color: #1d1d1b;
          font-weight: 700;
          position: relative;
        }
        #MainFooter .help .cta-faq > li > a:hover {
          color: #ff2157;
          text-decoration: none;
        }
        #MainFooter .help .cta-faq > li > a:after {
          position: absolute;
          margin-top: 0;
          margin-left: 1.5em;
          content: '\\e372';
          font-family: pictenza;
          font-size: 1em;
          font-style: normal;
          speak: none;
          font-weight: 700;
          -webkit-font-smoothing: antialiased;
        }
        #MainFooter .help .cta-faq > li + li {
          margin: 17px 0 0;
        }
        #MainFooter .help .contact-Sc {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: flex-end;
          width: 41%;
        }
        #MainFooter .help .contact-phone {
          list-style: none;
          margin: 0 0 10px;
          width: 100%;
        }
        #MainFooter .help .contact-phone:before {
          content: '\\e620';
          margin: 0 0 10px;
          display: block;
          font-size: 32px;
          color: #1d1d1b;
          font-family: pictenza;
        }
        #MainFooter .help .contact-mail,
        #MainFooter .help .contact-phone > span {
          text-align: center;
          font-family: robotoc, 'Arial Narrow', sans-serif;
        }
        #MainFooter .help .contact-phone > span {
          font-weight: 600;
          font-size: 14px;
          color: #ff2157;
          display: block;
        }
        #MainFooter .help .contact-phone .title {
          color: #1d1d1b;
          font-size: 14px;
        }
        #MainFooter .help .contact-mail {
          width: 100%;
        }
        #MainFooter .help .contact-mail > a {
          color: #ff2157;
          text-transform: uppercase;
        }
        #MainFooter .help .contact-mail > a:before {
          content: '\\e623';
          margin: 0 0 10px;
          display: block;
          font-size: 32px;
          color: #1d1d1b;
          font-family: pictenza;
        }
        #MainFooter .help .contact-mail > a > span {
          font-size: 14px;
          font-weight: 600;
        }
        #MainFooter .help .contact-mail > a:hover {
          text-decoration: none;
        }
        #MainFooter .help .contact-mail > a:hover:before {
          color: #ff2157;
        }
        #MainFooter .help .contact-mail > a:hover > span {
          text-decoration: underline;
        }
        #MainFooter .help .mobile-app {
          border-top: 2px solid #f2f2f2;
          padding: 40px 24%;
          background: url(data:image/png;base64,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)
            70% center no-repeat;
          background-size: 104px auto;
          width: 100%;
          text-align: left;
        }
        #MainFooter .help .mobile-app .title-level3 {
          margin: 0 0 14px;
          text-align: left;
          padding: 0;
        }
        #MainFooter .help .mobile-app > p {
          width: 65%;
          text-align: left;
          margin: 16px 0;
        }
        #MainFooter .help .mobile-app .apple {
          margin-left: 0;
          vertical-align: bottom;
          width: 145px;
          height: 40px;
          display: block;
        }
        #MainFooter .help .mobile-app .android {
          display: block;
          width: 154px;
          margin: 10px 0 0;
        }
        #MainFooter .help .mobile-app .android > img {
          width: 100%;
          height: auto;
          margin: -9px 0 0 -9px;
        }
        #MainFooter .help .mobile-app.no-background {
          background: 0 0;
        }
        #MainFooter .help .mobile-app.no-background .title-level3 {
          text-align: center;
        }
        #MainFooter .help .mobile-app.no-background > p {
          text-align: center;
          width: 100%;
          max-width: 100%;
        }
        #MainFooter nav.footer-nav {
          background: #f2f2f2;
          display: flex;
          justify-content: space-between;
          padding: 36px 40px;
        }
        #MainFooter nav.footer-nav .col.avis {
          display: none;
        }
        #MainFooter nav.footer-nav .col .title-nav {
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #000;
          padding: 0 0 11px;
          text-align: left;
          position: relative;
        }
        #MainFooter nav.footer-nav .col .list {
          margin: 0;
        }
        #MainFooter nav.footer-nav .col .list > li {
          font-family: roboto, Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          list-style: none;
          text-align: left;
        }
        #MainFooter nav.footer-nav .col .list > li > a,
        #MainFooter nav.footer-nav .col .list > li > span {
          color: #737373;
        }
        #MainFooter nav.footer-nav .col .list + .title-nav {
          margin-top: 35px;
        }
        #MainFooter nav.footer-nav .col .list.social-media {
          background: 0 0;
          display: flex;
          justify-content: space-between;
        }
        #MainFooter nav.footer-nav .col .list.social-media > li {
          display: inline-block;
          width: 36px;
          overflow: hidden;
        }
        #MainFooter .partners {
          display: flex;
          justify-content: center;
          padding: 25px 0;
          max-width: 1008px;
          margin: 0 auto;
        }
        #MainFooter .partners > ul {
          display: flex;
          justify-content: center;
          flex-flow: row wrap;
          padding: 0;
          margin: 0;
          width: 100%;
        }
        #MainFooter .partners > ul > li {
          list-style: none;
          overflow: hidden;
          display: flex;
        }
        #MainFooter .partners > ul > li.delivery,
        #MainFooter .partners > ul > li.quality {
          padding-left: 20px;
          margin-left: 0;
        }
        #MainFooter .partners > ul > li.delivery:before,
        #MainFooter .partners > ul > li.quality:before {
          content: '';
          border-left: 1px solid #d5d5d5;
          padding-left: 10px;
          padding-right: 10px;
        }
        #MainFooter .partners > ul:last-child:after {
          content: none;
        }
        #MainFooter .legal {
          padding: 40px;
          display: flex;
          justify-content: center;
          border-top: 2px solid #f2f2f2;
        }
        #MainFooter .legal .legal-navigation {
          border-radius: 2px;
          border-left: 0;
          border-right: 0;
          width: 90%;
          display: flex;
          justify-content: space-between;
          padding: 5px 6% 0 0;
          margin: 0;
        }
        #MainFooter .legal .legal-navigation > li {
          font-family: robotoc, 'Arial Narrow', sans-serif;
          font-weight: 700;
          list-style: none;
          text-align: left;
          flex-grow: 2;
        }
        #MainFooter .legal .legal-navigation > li > a,
        #MainFooter .legal .legal-navigation > li > span {
          color: #999;
          font-size: 12px;
          text-transform: uppercase;
        }
        #MainFooter .country-selector {
          width: 176px;
          position: relative;
          text-align: left;
          line-height: 30px;
        }
        #MainFooter .country-selector::before {
          content: '';
          width: 5px;
          height: 5px;
          border: 2px solid #1d1d1b;
          border-bottom: none;
          border-left: none;
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          -ms-transform: rotate(135deg);
          transform: rotate(135deg);
          position: absolute;
          display: block;
          top: 16px;
          right: 20px;
          transition: transform ease 250ms;
        }
        #MainFooter .country-selector .selected {
          cursor: pointer;
          padding: 6px 13px;
          border: 1px solid #d5d5d5;
          height: 40px;
          width: 176px;
          font-size: 14px;
          font-weight: 700;
          color: #1d1d1b;
        }
        #MainFooter .country-selector .selected:before {
          margin-right: 16px;
        }
        #MainFooter .country-selector .list {
          position: absolute;
          right: 0;
          bottom: 100%;
          left: 0;
          overflow: hidden;
          background: #fff;
          border-bottom: 0;
        }
        #MainFooter .country-selector .list > li > a {
          display: block;
          height: 0;
          padding: 0;
          transition: height ease 250ms;
          font-size: 14px;
          font-weight: 700;
          color: #1d1d1b;
        }
        #MainFooter .country-selector.open::before {
          transform: rotate(-45deg);
          top: 15px;
        }
        #MainFooter .country-selector.open .list {
          border: 1px solid #d5d5d5;
          border-bottom: none;
        }
        #MainFooter .country-selector.open .list > li,
        #MainFooter .country-selector.open .list > li + li {
          padding: 16px 10px 0 16px;
        }
        #MainFooter .country-selector.open .list > li:last-child {
          padding: 16px 10px 19px 16px;
        }
        #MainFooter .country-selector.open .list > li > a {
          display: inline-block;
        }
        #MainFooter .country-selector.open .list > li > a:before {
          margin-right: 11px;
        }
        @media screen and (orientation: landscape) {
          #MainFooter .help {
            display: flex;
            justify-content: space-between;
            flex-flow: nowrap;
            max-width: 1008px;
            margin: 0 auto;
          }
          #MainFooter .help .Sc {
            width: 50%;
            padding: 40px 50px;
          }
          #MainFooter .help .mobile-app {
            border-top: none;
            border-left: 2px solid #f4f4f4;
            justify-content: flex-start;
            background-position: 87% center;
            width: 50%;
            padding: 40px 90px;
            text-align: left;
          }
          #MainFooter .help .mobile-app > p {
            max-width: 216px;
          }
          #MainFooter .help .mobile-app > a {
            width: 145px;
          }
          #MainFooter .help .mobile-app > a img {
            width: 100%;
            height: auto;
          }
          #MainFooter nav.footer-nav {
            padding: 72px 30px 72px 0;
            justify-content: space-around;
          }
          #MainFooter nav.footer-nav .col.avis {
            display: flex;
            width: 325px;
            justify-content: center;
          }
          #MainFooter nav.footer-nav .col.avis .reviews {
            align-self: center;
            width: 250px;
            padding: 0;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .title-reviews {
            font-family: robotoc, 'Arial Narrow', sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #000;
            text-align: center;
            word-wrap: break-word;
            text-transform: uppercase;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .rating {
            margin: 16px 0 0;
            padding: 16px 0 0;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .rating > span {
            display: block;
            text-align: center;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .rating > span.average,
          #MainFooter nav.footer-nav .col.avis .reviews .rating > span.best {
            font-family: robotoc, 'Arial Narrow', sans-serif;
            display: inline;
            font-size: 40px;
            color: #000;
            font-weight: 600;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .rating > span + span {
            margin-top: 3px;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .rating .votes {
            font-family: robotoc, 'Arial Narrow', sans-serif;
            font-size: 14px;
            color: #737373;
            margin-top: 3px;
            display: block;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .rating .votes > span {
            display: inline-block;
          }
          #MainFooter nav.footer-nav .col.avis .reviews .rating .votes:hover span {
            text-decoration: underline;
          }
          #MainFooter nav.footer-nav .col.avis .logo {
            display: flex;
            width: 100%;
            align-content: center;
            justify-content: center;
            padding: 0 30px 0 20px;
          }
          #MainFooter nav.footer-nav .col.avis .logo > img {
            align-self: center;
            max-width: 186px;
          }
          #MainFooter nav.footer-nav .col {
            width: 175px;
          }
          #MainFooter nav.footer-nav .col:nth-child(2) {
            width: 220px;
          }
          #MainFooter nav.footer-nav .col:nth-child(4) {
            width: 160px;
          }
          #MainFooter .partners > li + li {
            margin-left: 13px;
          }
          #MainFooter .legal {
            border-top: 1px solid #f2f2f2;
            padding: 30px 0;
            flex-flow: row nowrap;
            max-width: 1008px;
            margin: 0 auto;
          }
          #MainFooter .legal .legal-navigation {
            border: none;
            width: 65%;
          }
          #MainFooter .legal .legal-navigation > ul {
            width: 100%;
          }
          #MainFooter .legal .country-selector {
            width: 176px;
            margin: 0;
          }
        }
        @media screen and (min-width: 975px) {
          #MainFooter {
            margin: 32px auto 0;
          }
          #MainFooter .newsletter {
            width: 1008px;
            margin: 0 auto;
          }
          #MainFooter .newsletter .subscribe-newsletter {
            max-width: 685px;
            margin: 0 auto;
          }
          #MainFooter .newsletter .subscribe-newsletter .field {
            width: 335px;
            margin: 0 8px 0 0;
          }
          #MainFooter .newsletter .subscribe-newsletter .legal-message .tooltip-parent .tooltip {
            width: 526px;
            margin: 10px 0 0 -263px;
          }
          #MainFooter .help .Sc .cta-faq > li > a:hover,
          #MainFooter .help .Sc .cta-faq > li > a:hover .pictenza {
            color: #ff2157;
          }
          #MainFooter .help .mobile-app {
            min-height: 221px;
          }
          #MainFooter .help .mobile-app > div a.android {
            width: 156px;
          }
          #MainFooter nav.footer-nav .col .list.social-media > li > a:hover {
            margin-left: -31px;
          }
        }
      `}
    </style>
  );
};

export default StyleFooter;
