import React from 'react';
import { Table } from './table';

export const BasicTable = () => (
  <Table 
    columns={[
      {
        Header: 'Header 1',
        accessor: 'header1',
      },
      {
        Header: 'Header 2',
        accessor: 'header2',
      }
    ]} 
    data={[
      {
        "header1": "data header 1 row 1",
        "header2": "data header 2 row 1"
      },
      {
        "header1": "data header 1 row 2",
        "header2": "data header 2 row 2"
      }
    ]} 
    tableProps={{
      isGlobalFilterEnabled: true,
      isPaginationEnabled: true,
      maxRows: 10,
      paginationProps: {
        pageIndex: 0
      }
    }}
    className="customClass"
  />
);
