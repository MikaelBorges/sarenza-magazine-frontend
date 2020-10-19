import blockLink from './blockLink';
import button from './button';
import countrySelector from './countrySelector';
import footerLink from './footerLink';
import partnerIcon from './partnerIcon';
import reassurance from './reassurance';
import socialMediaItem from './socialMediaItem';

/**
 * @typedef {Footer} json
 * @property {Array} BlockLinks
 * @property {Array} CountrySelector
 * @property {Array} FooterLink
 * @property {Object} NeedHelp
 * @property {Object} Newsletter
 * @property {Array} PartnerIcon
 * @property {Array} Reassurance
 * @property {Object} Reviews
 * @property {Object} SocialMedia
 * @property {Object} VariousText
 * @property {String} created_at
 * @property {Object} created_by
 * @property {Number} id
 * @property {String} updated_at
 * @property {Object} updated_by
 *
 */
export const reassurances = (model = []) => {
  return model.map((item) => {
    return reassurance(item);
  });
};
export const needHelp = (model = {}) => {
  return {
    id: model.id,
    title: model.Title || '',
    text: model.Text || '',
    links: model.Link.map((item) => button(item))
  };
};
export const variousText = (model = {}) => {
  return {
    id: model.id,
    title: model.Title || '',
    text: model.Text || ''
  };
};
export const newsletter = (model = {}) => {
  return {
    id: model.id,
    title: model.Title || '',
    text: model.Text || '',
    subtitle: model.SubTitle || '',
    term: model.Terms || '',
    input: model.Input || ''
  };
};
export const input = (model = {}) => {
  return {
    id: model.id,
    label: model.Label || '',
    placeholder: model.Placeholder || '',
    links: model.Button.map((item) => button(item))
  };
};
export const blockLinks = (model = []) => {
  return model.map((item) => {
    return blockLink(item);
  });
};
export const review = (model = {}) => {
  return {
    id: model.id,
    title: model.Title || '',
    rate: model.Rate || '',
    maxrate: model.maxRate || '',
    votes: model.Votes || {}
  };
};

export const socialMedia = (model = {}) => {
  return {
    id: model.id,
    title: model.title || '',
    socialMediaItem: model.SocialMediaItem.map((item) => socialMediaItem(item))
  };
};

export const partnerIcons = (model = []) => {
  return model.map((item) => {
    return partnerIcon(item);
  });
};
export const footerLinks = (model = []) => {
  return model.map((item) => {
    return footerLink(item);
  });
};
export const countrySelectors = (model = []) => {
  return model.map((item) => {
    return countrySelector(item);
  });
};

const footer = (model = {}) => {
  return {
    needHelp: needHelp(model.NeedHelp),
    variousText: variousText(model.VariousText),
    reassurances: reassurances(model.Reassurance) || [],
    newsletter: newsletter(model.Newsletter),
    blockLinks: blockLinks(model.BlockLinks) || [],
    review: review(model.Reviews),
    socialMedia: socialMedia(model.SocialMedia),
    partnerIcons: partnerIcons(model.PartnerIcon),
    footerLinks: footerLinks(model.FooterLink),
    countrySelectors: countrySelectors(model.CountrySelector)
  };
};
export default footer;
