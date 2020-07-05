import React from "react";
import { useTable, usePagination, useSortBy, useFilters } from "react-table";
import "./Table.css";

const Table = ({ data, columns }) => {
  function ColumnFilter({ column: { filterValue, setFilter } }) {
    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      />
    );
  }

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const sortBy = React.useMemo(
    () => [
      {
        id: "id",
        desc: true,
      },
      {
        id: "userId",
        desc: true,
      },
      {
        id: "title",
        desc: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      state: { sortBy },
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 20 },
      defaultCanSort: true,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="total_pagination">
        <div className="pagination">
          <span
            className={
              canPreviousPage ? "pagination_icon" : "pagination_disabled"
            }
            onClick={() => gotoPage(0)}
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </span>
          <span
            className={
              canPreviousPage ? "pagination_icon" : "pagination_disabled"
            }
            onClick={() => previousPage()}
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </span>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span
            className={canNextPage ? "pagination_icon" : "pagination_disabled"}
            onClick={() => nextPage()}
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
          <span
            className={canNextPage ? "pagination_icon" : "pagination_disabled"}
            onClick={() => gotoPage(pageCount - 1)}
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
        <div className="page_details">Total No of Records: {rows.length} </div>
        <div className="page_details">Records per page: {page.length}</div>
      </div>
      <table {...getTableProps()}>
        <thead>
          {console.log("page", page)}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div
                    {...column.getSortByToggleProps()}
                    onClick={() =>
                      column.isSortedDesc
                        ? column.toggleSortBy(false, false)
                        : column.toggleSortBy(true, false)
                    }
                  >
                    {column.render("Header")}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </div>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { Table };
