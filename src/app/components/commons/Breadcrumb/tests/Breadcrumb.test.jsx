import { render } from '@testing-library/react';
import React from 'react';

import Breadcrumb from '../Breadcrumb';

describe('<Breadcrumb />', () => {
  it('should match the expected snapshot', () => {
    const breadcrumbs = [
      {
        label: 'Magazine',
        value: '/Magazine'
      },
      {
        label: 'Rubrique 1',
        value: '/rubrique-1'
      },
      {
        label: 'Article 1',
        value: '/article-1'
      }
    ];
    const { container } = render(<Breadcrumb breadcrumbs={breadcrumbs} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
