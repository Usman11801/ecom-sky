// components/Table.js
import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';

const Table = ({ columns, data, onEdit, onDelete, renderActionButtons }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Initial page size is 5
    },
    usePagination
  );

  const handleChangePageSize = (e) => {
    setPageSize(Number(e.target.value));
  };

  const pagination = useMemo(
    () => (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={pageIndex === pageOptions.length - 1}>
            {'>>'}
          </button>{' '}
        </div>
        <div>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <select value={pageSize} onChange={handleChangePageSize}>
            {[5, 10, 15].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    ),
    [
      canNextPage,
      canPreviousPage,
      gotoPage,
      pageIndex,
      pageOptions.length,
      nextPage,
      pageSize,
      previousPage,
    ]
  );

  return (
    <>
      <table
        {...getTableProps()}
        style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px' }}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: '2px solid #ddd',
                    background: '#f2f2f2',
                    padding: '8px',
                    textAlign: 'left',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
              <th
                style={{
                  borderBottom: '2px solid #ddd',
                  background: '#f2f2f2',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                Actions
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        borderBottom: '1px solid #ddd',
                        padding: '8px',
                        textAlign: 'left',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
                <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                  {renderActionButtons(row)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {pagination}
    </>
  );
};

export default Table;
