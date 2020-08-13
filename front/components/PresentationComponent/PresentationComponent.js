import React from "react";
import PropTypes from "prop-types";
import { Item } from "../Item/Item";
import { Image } from "../Image/Image";
import ReactMarkdown from "react-markdown";

const PresentationComponent = data => {
  const getPhoto = (index, data) => ({
    src: data.items[index].photo_url,
    ...data.items[index]
  });
  const photo1 = getPhoto(0, data);
  const photo2 = getPhoto(1, data);
  return (
    <React.Fragment>
      <Item>
        <Image {...photo1} />
      </Item>
      <Item>
        <ReactMarkdown source={data.description} />
      </Item>
      <Item>
        <Image {...photo2} />
      </Item>
    </React.Fragment>
  );
};

PresentationComponent.propTypes = {
  items: PropTypes.array,
  description: PropTypes.string
};

export default PresentationComponent;
