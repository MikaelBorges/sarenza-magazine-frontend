import { render } from '@testing-library/react';
import React from 'react';

import Button from '../Button';

describe('Button', () => {
  it('should match the expected snapshot with default props', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with complete props', () => {
    const props = {
      onClick: () => {},
      componentCustomClass: 'tunnel',
      title: 'toto'
    };
    const { container } = render(<Button {...props}>Plop</Button>);

    expect(container).toMatchSnapshot();
  });
});
