import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import LinkComponent from '../LinkComponent';

describe('LinkComponent', () => {
  it('should match the expected snapshot with default props', () => {
    const wrapper = render(<LinkComponent />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the expected snapshot with basic props', () => {
    const wrapper = render(
      <MemoryRouter>
        <LinkComponent link="blabla">Plop</LinkComponent>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
