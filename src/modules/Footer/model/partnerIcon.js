export default function partnerIcon(model = {}) {
  return {
    id: model.id,
    payment: model.PaymentPartner,
    shipping: model.ShippingPartner || '',
    quality: model.QualityPartner,
    text: model.text,
    href: model.link,
    liClass: model.liClass || '',
    title: model.title || ''
  };
}
