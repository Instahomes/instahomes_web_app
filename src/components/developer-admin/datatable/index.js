import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Frame, SwitchComponent, useStyles } from "./styles";
import { Icon } from "@iconify/react";

const Datatable = ({ columns, data }) => {
  const classes = useStyles();

  const tableInstance = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Frame>
      <MaUTable {...getTableProps()} size="small">
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  className={classes.tableHeaderCell}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <React.Fragment>
                          &nbsp;
                          <Icon
                            icon="fa-solid:sort-down"
                            color="#3F526A"
                            width="1em"
                            height="1em"
                          />
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          &nbsp;
                          <Icon
                            icon="fa-solid:sort-up"
                            color="#3F526A"
                            width="1em"
                            height="1em"
                          />
                        </React.Fragment>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell
                      className={classes.tableCell}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </Frame>
  );
};

export default Datatable;
