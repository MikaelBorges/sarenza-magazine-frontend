import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import PaginationComponent from '../components/PaginationComponent';
import Pagination from '../Pagination';

describe('<Pagination />', () => {
  const data = Array.from(Array(100).keys()).map((i, index) => ({
    label: `Je suis ${i}`,
    id: index
  }));

  let container;

  beforeEach(() => {
    container = render(
      <Pagination
        data={data}
        renderContent={(arr) => {
          return (
            <div>
              {arr.map((item) => (
                <div key={item.id} data-testid={`test-${item.id}`}>
                  {item.label}
                </div>
              ))}
            </div>
          );
        }}
        renderFooter={(arr, params) => (
          <PaginationComponent
            data={arr.map((item) => ({ label: item.label, value: item.id }))}
            params={params}
          />
        )}
      />
    );
  });
  it('should match the expected snapshot with default props', () => {
    expect(container.getAllByTestId(/test--?\d+/).length).toBe(10);
    expect(container.container).toMatchSnapshot();
  });
  it('get next page when click on the next button', () => {
    expect(container.getByText('Page : 1 sur 10')).toBeDefined();
    fireEvent.click(container.getByTestId('pageNextButton'));
    expect(container.queryByText('Page : 1 sur 10')).toBeNull();
    expect(container.getByText('Page : 2 sur 10')).toBeDefined();

    expect(container.container).toMatchSnapshot();
  });

  it('change the page size', () => {
    expect(container.getAllByTestId(/test--?\d+/).length).toBe(10);
    fireEvent.change(container.getByTestId('rangeSelectItems'), { target: { value: '5' } });
    expect(container.getAllByTestId(/test--?\d+/).length).toBe(5);
    expect(container.container).toMatchSnapshot();
  });
});
