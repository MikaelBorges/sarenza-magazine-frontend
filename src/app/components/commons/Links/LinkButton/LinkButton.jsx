import * as React from 'react';

import { LINK_TYPE } from '../constants';
import LinkGeneric from '../utils/LinkGeneric';

const LinkButton = (props) => {
  return <LinkGeneric type={LINK_TYPE.BUTTON} {...props} />;
};

export default LinkButton;
