import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import * as React from 'react';

import Text from '../Text';

describe('<Text />', () => {
  it('should match the expected snapshot with default props', () => {
    const { container } = render(<Text>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with custom wrapper', () => {
    const { container } = render(<Text wrapperTag="h2">test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "error"', () => {
    const { container } = render(<Text error>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "red"', () => {
    const { container } = render(<Text red>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "ellipsis"', () => {
    const { container } = render(<Text ellipsis>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "small"', () => {
    const { container } = render(<Text small>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "medium"', () => {
    const { container } = render(<Text medium>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "big"', () => {
    const { container } = render(<Text big>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "bigger"', () => {
    const { container } = render(<Text bigger>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "huge"', () => {
    const { container } = render(<Text huge>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "light"', () => {
    const { container } = render(<Text light>test</Text>);

    expect(container).toMatchSnapshot();
  });

  it('should match the expected snapshot with prop "bold"', () => {
    const { container } = render(<Text bold>test</Text>);

    expect(container).toMatchSnapshot();
  });
});
