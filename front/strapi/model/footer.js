import { button } from './button';

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
export const footer = (model = {}) => {
    return {
        needHelp: needHelp(model.NeedHelp)
    };
};

export const needHelp = (model = {}) => {
    return {
        id: model.id,
        title: model.Title || '',
        text: model.Text || '',
        links: model.Link.map((item) => button(item))
    };
};
