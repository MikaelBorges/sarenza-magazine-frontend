import { render } from '@testing-library/react';
import React from 'react';

import { LINK_TYPE } from '../../../constants';
import LinkFormat from '../LinkFormat';

describe('<LinkFormat />', () => {
  it('should match the expected snapshot with default props', () => {
    const wrapper = render(<LinkFormat />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the expected snapshot with complete props', () => {
    const props = {
      type: LINK_TYPE.BUTTON,
      disabled: true,
      onClick: () => {},
      baseStyle: ['blu'],
      specificStyle: 'tunnel'
    };
    const wrapper = render(<LinkFormat {...props}>Blabla</LinkFormat>);

    expect(wrapper).toMatchSnapshot();
  });
});
