import React from 'react';

import * as ICONS from './constants';
import Icon from './Icon';

export default {
  title: 'Icon',
  component: Icon
};

export const ChevronDown = () => <Icon name={ICONS.CHEVRON_DOWN} />;
export const ChevronLeft = () => <Icon name={ICONS.CHEVRON_LEFT} />;
export const ChevronRight = () => <Icon name={ICONS.CHEVRON_RIGHT} />;
export const Spinner = () => <Icon name={ICONS.SPINNER} />;
export const Checked = () => <Icon name={ICONS.CHECKED} />;
