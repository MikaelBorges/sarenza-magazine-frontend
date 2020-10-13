import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import LinkText from '../LinkText';

describe('LinkText', () => {
  it('should match the expected snapshot with default props', () => {
    const wrapper = render(<LinkText />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the expected snapshot with basic props', () => {
    const wrapper = render(
      <MemoryRouter>
        <LinkText link="blabla">Plop</LinkText>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
