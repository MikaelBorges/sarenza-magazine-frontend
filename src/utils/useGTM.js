import getConfig from 'next/config';
import TagManager from 'react-gtm-module';

import { getCookieConsentList } from './cookieManager';

const { serverRuntimeConfig } = getConfig();
const { IS_MOBILE } = serverRuntimeConfig;

let cookieConsentList;
const gtmStack = [];
const trackedItemList = [];
const purgeStack = () => {
  gtmStack.forEach((func) => {
    if (typeof func === 'function') func();
  });
  gtmStack.push = (func) => {
    if (typeof func === 'function') func();
  };
};

export const initTagManager = () => {
  cookieConsentList = getCookieConsentList();

  const tagManagerArgs = {
    gtmId: 'GTM-5DJ7GTF', // variabliser plus tard
    dataLayer: {
      env_channel: 'web',
      env_country: 'FR',
      env_platform: `${IS_MOBILE ? 'Mobile' : 'Desktop'}`, // LE fichier .env target uniquement le mobile donc à revoir
      env_template: 'Magazine',
      env_work: 'Prod', // rework à prévoir pour récupérer les environnements réels
      env_language: 'fra',
      domain_id: 'com',
      cookie_audience: !!(cookieConsentList && cookieConsentList.includes('Audience')),
      cookie_personalization: !!(
        cookieConsentList && cookieConsentList.includes('Personalisation')
      ),
      cookie_advertising: !!(cookieConsentList && cookieConsentList.includes('Advertising')),
      cookie_socials: !!(cookieConsentList && cookieConsentList.includes('Socials'))
    },
    events: {
      promotionPrint: 'promotionPrint',
      promotionClick: 'promotionClick'
    }
  };

  TagManager.initialize(tagManagerArgs);
  purgeStack();
};

export const TrackEvent = {
  PromotionPrint: 'promotionPrint',
  PromotionClick: 'promotionClick',
  ProductClick: 'productClick',
  ProductPrint: 'productPrint'
};

export default function useGTM(obj, trackEvent) {
  /* Prevent multiple tracking on same page */
  if (obj && obj.name && trackEvent && obj.strapId) {
    if (trackedItemList.includes(obj.name + trackEvent + obj.strapId)) return;
    trackedItemList.push(obj.name + trackEvent + obj.strapId);
  }
  // if (obj && obj.name && trackEvent) {
  //   if (trackedItemList.includes(obj.name + trackEvent)) return;
  //   trackedItemList.push(obj.name + trackEvent);
  // }

  gtmStack.push(() => {
    if (cookieConsentList != null) {
      switch (trackEvent) {
        case TrackEvent.PromotionPrint:
          TagManager.dataLayer({
            dataLayer: {
              event: `${trackEvent}`,
              ecommerce: {
                promoView: {
                  promotions: [obj]
                }
              }
            }
          });
          break;
        case TrackEvent.PromotionClick:
          TagManager.dataLayer({
            dataLayer: {
              event: `${trackEvent}`,
              ecommerce: {
                promoClick: {
                  promotions: [obj]
                }
              }
            }
          });
          break;
        case TrackEvent.ProductClick:
          TagManager.dataLayer({
            dataLayer: {
              event: `${trackEvent}`,
              ecommerce: {
                impressions: [obj]
              }
            }
          });
          break;
        case TrackEvent.ProductPrint:
          TagManager.dataLayer({
            dataLayer: {
              event: `${trackEvent}`,
              ecommerce: {
                impressions: [obj]
              }
            }
          });
          break;

        default:
          TagManager.dataLayer({
            dataLayer: obj
          });
          break;
      }
    }
  });
}
