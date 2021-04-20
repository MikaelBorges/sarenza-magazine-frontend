import TagManager from 'react-gtm-module';
import getConfig from 'next/config';
import { getCookieConsentList } from './cookieManager';

const { serverRuntimeConfig } = getConfig();
const { IS_PROD, IS_MOBILE } = serverRuntimeConfig;

let cookieConsentList;
let gtmStack = [];
const purgeStack = (func) => {
  gtmStack.forEach((func) => {
    if (typeof func == 'function') func();
  })
  gtmStack.push = (func) => {
    if (typeof func == 'function') func();
  }
}

export const initTagManager = () => {

  cookieConsentList = getCookieConsentList();

  const tagManagerArgs = {
    gtmId: 'GTM-5DJ7GTF', //variabliser plus tard
    dataLayer: {
      env_channel: 'web',
      env_country: 'FR',
      env_platform: `${IS_MOBILE ? 'Mobile' : 'Desktop'}`, //LE fichier .env target uniquement le mobile donc à revoir
      env_template: 'Magazine',
      env_work: 'Prod', //rework à prévoir pour récupérer les environnements réels
      env_language: 'fra',
      domain_id: 'com',
      cookie_audience: cookieConsentList && cookieConsentList.includes('Audience') ? true : false,
      cookie_personalization: cookieConsentList && cookieConsentList.includes('Personalisation') ? true : false,
      cookie_advertising: cookieConsentList && cookieConsentList.includes('Advertising') ? true : false,
      cookie_socials: cookieConsentList && cookieConsentList.includes('Socials') ? true : false,
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

  gtmStack.push(function () {
    
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
              ecommerce: {
                impressions: [obj]
              },
              event: `${trackEvent}`
            }
          });
          break;
        case TrackEvent.ProductPrint:
          TagManager.dataLayer({
            dataLayer: {
              ecommerce: {
                impressions: [obj]
              },
              event: `${trackEvent}`
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
  })


}
