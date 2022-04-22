export const replaceByJsx = (tpl) => {
  const t = tpl
    .split(/\{\{([^\}]+)?\}}/g)
    .map((item, index) => {
      return (
        item && {
          type: index === 1 ? 'verbatim' : 'text',
          text: item
        }
      );
    })
    .filter((r) => r !== '');

  return t;
};
