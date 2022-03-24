/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter, useFilters } from 'react-table';
import styles from './Table.module.css';
import classnames from 'classnames';

export const Table = ({ columns, data, tableProps, className }) => {
  const [selectedRow, setSelectedRow] = useState({})

  const instance = useTable(
    {
      columns,
      data,
      initialState: {
        isGlobalFilterEnabled: tableProps ? tableProps.isGlobalFilterEnabled : true,
        isPaginationEnabled: tableProps ? tableProps.isPaginationEnabled : false,
        pageSize: tableProps && tableProps.isPaginationEnabled ? (tableProps.maxRows ? tableProps.maxRows : 10) : data.length,
        pageIndex: tableProps && tableProps.paginationProps ? tableProps.paginationProps.pageIndex: 0,
        isHeaderEnabled: tableProps && (typeof tableProps.isHeaderEnabled == "boolean") ? tableProps.isHeaderEnabled : true
      },
      className
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { isGlobalFilterEnabled, isPaginationEnabled, pageIndex, pageSize, isHeaderEnabled },
  } = instance;

  const slicedRows = rows.slice(0, pageSize)
  const tableClass = classnames(styles['table'], className)
  
  function PrepareTableHeader(isHeaderEnabled) {
    if (isHeaderEnabled.isHeaderEnabled) {
      return (
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className={styles.table_thead_th}  {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
        </thead>
      )
    }
    return null;
  }

  function PrepareTableBody(isPaginationEnabled) {
    if (isPaginationEnabled.isPaginationEnabled) {
      return (
        <tbody {...getTableBodyProps()}>
          {page.map(rowInstance)}
        </tbody>
      )
    } else {
      return (
        <tbody {...getTableBodyProps()}>
          {slicedRows.map(rowInstance)}
        </tbody>
      )
    }
  }


  const GlobalFilter = ({ setGlobalFilter }) => {
    return (
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <input className={styles.table_input_filter}
          onChange={e => {
            setGlobalFilter(e.target.value);
          }}
          placeholder=" Filter"
        />
      </div>
    );
  };

  function PaginationControl(isPaginationEnabled) {
    if (isPaginationEnabled.isPaginationEnabled) {
      return (
        <div className={styles.table_pagination} hidden={!isPaginationEnabled}>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
        </div>
      );
    } else {
      return null;
    }
  }

  const _onRowClick = (e, row) => {
    if(row && row.values){
      setSelectedRow(row);
    }
  }



  const rowInstance = (
    (row) => {
      const selectedStyle = row === selectedRow ? styles.table_tbody_tr_selectedRow : styles.table_tbody_tr;
      prepareRow(row);
      return (
        <tr className={selectedStyle} {...row.getRowProps()} onClick={(e) => _onRowClick(e, row)}>
          {row.cells.map(cell => {
            return (
              <td className={styles.table_tbody_td} {...cell.getCellProps()}>{cell.render('Cell')}</td>
            )
          })}
        </tr>
      )
    }
  );

  return (
    <div>
      {isGlobalFilterEnabled ? GlobalFilter?.(instance): null}
      <table className={tableClass} {...getTableProps()}>
        <PrepareTableHeader isHeaderEnabled={isHeaderEnabled} />
        <PrepareTableBody isPaginationEnabled={isPaginationEnabled} />
      </table>
      <PaginationControl isPaginationEnabled={isPaginationEnabled} />
    </div>
  );
}