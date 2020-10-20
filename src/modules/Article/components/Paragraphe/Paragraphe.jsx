import React from 'react';

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
    .filter((r) => r != '');

  return t;
};

const Comp = ({ text, verbatim }) => {
  return (
    <div>
      <div>{text}</div>
      <div>{verbatim}</div>
    </div>
  );
};
const Paragraphe = ({ paragraph, title }) => {
  return <div>{replaceByJsx(paragraph)}</div>;
};

export default Paragraphe;
