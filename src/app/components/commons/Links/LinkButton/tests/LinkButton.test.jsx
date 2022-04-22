import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import LinkButton from '../LinkButton';

describe('LinkButton', () => {
  it('should match the expected snapshot with default props', () => {
    const wrapper = render(<LinkButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the expected snapshot with basic props', () => {
    const wrapper = render(
      <MemoryRouter>
        <LinkButton link="blabla">Plop</LinkButton>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
