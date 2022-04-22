import { render } from '@testing-library/react';
import React from 'react';

import * as ICONS from '../constants';
import Icon from '../Icon';

describe('<Icon name="xxx" />', () => {
  it('name "CHEVRON_RIGHT" should match the expected snapshot', () => {
    const { container } = render(<Icon name={ICONS.CHEVRON_RIGHT} />);
    expect(container).toMatchSnapshot();
  });
  it('name "CHEVRON_LEFT" should match the expected snapshot', () => {
    const { container } = render(<Icon name={ICONS.CHEVRON_LEFT} />);
    expect(container).toMatchSnapshot();
  });
  it('name "CHEVRON_DOWN" should match the expected snapshot', () => {
    const { container } = render(<Icon name={ICONS.CHEVRON_DOWN} />);
    expect(container).toMatchSnapshot();
  });
});
