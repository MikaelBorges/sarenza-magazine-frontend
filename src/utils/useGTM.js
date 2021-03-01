import TagManager from 'react-gtm-module';

export default function useGTM(obj, trackEvent) {

  switch (trackEvent) {
    case 'promotionPrint':
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
    case 'promotionClick':
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
    case 'productClick':
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
      case 'productPrint':
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
