import React from 'react';
import { getAllByText, render } from '@testing-library/react';
import { BasicTable } from './table.composition';


it('should render with the correct text', () => {
  const { getAllByText } = render(<BasicTable />);
  
  expect(getAllByText('Header')).toBeTruthy();
  expect(getAllByText('Cell text')).toBeTruthy();
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

