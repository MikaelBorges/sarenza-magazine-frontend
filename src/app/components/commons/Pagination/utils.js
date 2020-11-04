/**
 * Return the items by paginate parameter
 * @param items
 * @param params
 */
export const paginate = (items, params) => {
  const currentPage = (params.pageIndex - 1) * params.pageSize;
  return items.slice(currentPage, currentPage + params.pageSize);
};
/**
 *
 * @param {number} pageSize
 * @param {number} totalRows
 */
export const getTotalPages = (pageSize, totalRows) => {
  return Math.ceil(totalRows / pageSize);
};

export const nextActivate = (options) =>
  getTotalPages(options.pageSize, options.totalRows) > options.pageIndex;

export const prevActivate = (options) => options.pageIndex > 1;

/* eslint-disable no-plusplus */
export const displayPage = (nbItem, indexPage, max) => {
  const paginationItem = [];
  const item = indexPage - 1;
  for (let index = item; index < item + nbItem; index++) {
    if (index < max) {
      paginationItem.push(index + 1);
    }
  }
  return paginationItem;
};
