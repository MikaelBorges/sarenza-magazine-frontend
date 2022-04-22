import React from 'react';

import { LINK_TYPE } from '../constants';
import LinkGeneric from '../utils/LinkGeneric';

const LinkText = (props) => <LinkGeneric type={LINK_TYPE.TEXT} {...props} />;

export default LinkText;
