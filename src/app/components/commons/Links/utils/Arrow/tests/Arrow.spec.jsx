import { render } from '@testing-library/react';
import React from 'react';

import { ARROW_DIRECTION } from '../../../constants';
import Arrow from '../Arrow';

describe('Arrow', () => {
  it('should match the expected snapshot with default props', () => {
    const wrapper = render(<Arrow />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should match the expected snapshot with direction down', () => {
    const wrapper = render(<Arrow direction={ARROW_DIRECTION.DOWN} />);

    expect(wrapper).toMatchSnapshot();
  });
});
