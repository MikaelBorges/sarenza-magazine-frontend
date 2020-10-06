import { render } from '@testing-library/react';
import React from 'react';

import { LINK_TYPE } from '../../../constants';
import LinkGeneric from '../LinkGeneric';

describe('LinkGeneric', () => {
  it('should match the expected snapshot with default props', () => {
    const wrapper = render(<LinkGeneric />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the expected snapshot with complete props', () => {
    const props = {
      type: LINK_TYPE.BUTTON,
      onClick: () => {},
      absolute: true,
      link: 'blabla',
      noFollow: true,
      newTab: true,
      baseLinkStyle: ['blup'],
      componentCustomClass: 'tunnel'
    };
    const wrapper = render(<LinkGeneric {...props}>Plop</LinkGeneric>);

    expect(wrapper).toMatchSnapshot();
  });
});
