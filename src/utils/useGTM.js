import TagManager from 'react-gtm-module';

 const tagManagerArgs = {
  gtmId: 'GTM-5DJ7GTF',
  dataLayer: {
    env_channel: 'web',
    env_country: 'FR',
    env_platform: '',
    env_template: 'Magazine',
    env_work: 'http://localhost:1337',
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
            impressions: {
              obj
            }
          },
          event: `${trackEvent}`
        }
      });
      break;
      case TrackEvent.ProductPrint :
        TagManager.dataLayer({
          dataLayer: {
            ecommerce: {
              impressions: {
                obj
              }
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
