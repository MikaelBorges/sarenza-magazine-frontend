import TagManager from 'react-gtm-module';
import getConfig from 'next/config';


 const { serverRuntimeConfig } = getConfig();
 const { IS_PROD, IS_MOBILE } = serverRuntimeConfig;


 const tagManagerArgs = {
  gtmId: 'GTM-5DJ7GTF', //variabliser plus tard
  dataLayer: {
    env_channel: 'web',
    env_country: 'FR',
    env_platform: `${IS_MOBILE ? 'Mobile' : 'Desktop' }`,//LE fichier .env target uniquement le mobile donc à revoir
    env_template: 'Magazine',
    env_work: `${IS_PROD ? 'Prod' : 'development' }`, //rework à prévoir pour récupérer les environnements réels
    env_language: 'fra',
    domain_id: 'com'
  },
  events: {
    promotionPrint : 'promotionPrint',
    promotionClick: 'promotionClick'
  }
  }

  export const initTagManager = () => {
    TagManager.initialize(tagManagerArgs)
  }

  export const TrackEvent = {
    PromotionPrint : 'promotionPrint',
    PromotionClick : 'promotionClick',
    ProductClick : 'productClick',
    ProductPrint : 'productPrint'
  
  }

export default function useGTM(obj, trackEvent) {

  switch (trackEvent) {
    case TrackEvent.PromotionPrint :
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
    case TrackEvent.PromotionClick :
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
            impressions: [
              obj
            ]
          },
          event: `${trackEvent}`
        }
      });
      break;
      case TrackEvent.ProductPrint :
        TagManager.dataLayer({
          dataLayer: {
            ecommerce: {
              impressions: [
                obj
              ]
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
