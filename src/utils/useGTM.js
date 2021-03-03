import TagManager from 'react-gtm-module';

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
