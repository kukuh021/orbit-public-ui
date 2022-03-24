import React from 'react';
import { render } from '@testing-library/react';
import { BasicTable } from './table.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicTable />);
  
  expect(getByText('Header 1')).toBeTruthy();
  expect(getByText('Header 2')).toBeTruthy();
  expect(getByText('data header 1 row 1')).toBeTruthy();
  expect(getByText('data header 2 row 1')).toBeTruthy();
  expect(getByText('data header 1 row 2')).toBeTruthy();
  expect(getByText('data header 2 row 2')).toBeTruthy();
});

it('should have correct class', () => {
  const { container } = render(<BasicTable />);

  expect(container.getElementsByTagName('table')[0]).toHaveClass('table');
  expect(container.getElementsByTagName('tr')[1]).toHaveClass('table_tbody_tr');
  expect(container.getElementsByTagName('td')[0]).toHaveClass('table_tbody_td');
  expect(container.getElementsByTagName('th')[0]).toHaveClass('table_thead_th');
  expect(container.getElementsByTagName('input')[0]).toHaveClass('table_input_filter');
  expect(container.getElementsByClassName('table_input_filter')[0]).toHaveClass('table_input_filter');
});

it('should have custom class', () => {
  const { container } = render(<BasicTable />);

  expect(container.getElementsByTagName('table')[0]).toHaveClass('customClass');
});

