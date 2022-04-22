import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import * as React from 'react';

import Box from '../Box';

describe('<Box />', () => {
  it('should match the expected snapshot with default props', () => {
    const { container, getByText } = render(<Box>test</Box>);

    expect(getByText('test')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
  it('should match the expected snapshot without children but with placeholder', () => {
    const { container, getByText } = render(<Box placeholder="toto" />);
    expect(getByText('toto')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
  it('should match the expected snapshot with complete css class', () => {
    const { container } = render(<Box smallMargin displayColumn hasError />);

    expect(container.querySelector('.smallMargin')).toBeDefined();
    expect(container.querySelector('.displayColumn')).toBeDefined();
    expect(container.querySelector('.error')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
