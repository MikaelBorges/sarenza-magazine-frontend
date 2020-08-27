import React from "react";

export const Image = ({ src, alt, className, ...restAttr }) => {
  return <img src={src} alt={alt} className={className} {...restAttr} />;
};
