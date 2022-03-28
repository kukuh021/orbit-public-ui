import React from 'react';
import { Table } from './table';

export const BasicTable = () => (
  <Table 
    columns={[
      {
        Header: 'Header',
        accessor: 'header1',
      },
      {
        Header: 'Header',
        accessor: 'header2',
      },
      {
        Header: 'Header',
        accessor: 'header3',
      },
      {
        Header: 'Header',
        accessor: 'header4',
      }
    ]} 
    data={[
      {
        "header1": "Cell text",
        "header2": "Cell text",
        "header3": "Cell text",
        "header4": "Cell text"
      },
      {
        "header1": "Cell text",
        "header2": "Cell text",
        "header3": "Cell text",
        "header4": "Cell text"
      },
      {
        "header1": "Cell text",
        "header2": "Cell text",
        "header3": "Cell text",
        "header4": "Cell text"
      },
      {
        "header1": "Cell text",
        "header2": "Cell text",
        "header3": "Cell text",
        "header4": "Cell text"
      },
      {
        "header1": "Cell text",
        "header2": "Cell text",
        "header3": "Cell text",
        "header4": "Cell text"
      },
      {
        "header1": "Cell text second page",
        "header2": "Cell text second page",
        "header3": "Cell text second page",
        "header4": "Cell text second page"
      },
      {
        "header1": "Cell text second page",
        "header2": "Cell text second page",
        "header3": "Cell text second page",
        "header4": "Cell text second page"
      },
      {
        "header1": "Cell text second page",
        "header2": "Cell text second page",
        "header3": "Cell text second page",
        "header4": "Cell text second page"
      },
      {
        "header1": "Cell text second page",
        "header2": "Cell text second page",
        "header3": "Cell text second page",
        "header4": "Cell text second page"
      },
      {
        "header1": "Cell text second page",
        "header2": "Cell text second page",
        "header3": "Cell text second page",
        "header4": "Cell text second page"
      }
    ]} 
    tableProps={{
      isGlobalFilterEnabled: true,
      isPaginationEnabled: true,
      maxRows: 5,
      paginationProps: {
        pageIndex: 0
      }
    }}
    className="customClass"
  />
);
