import React, { useMemo } from "react";
import { useTable } from "react-table";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Icon } from "@iconify/react";
import { Frame, SwitchComponent, useStyles } from "./styles";

const VisibilityCell = ({ value, ...rest }) => {
  return <SwitchComponent checked={value} onChange={() => {}} />;
};

const Datatable = () => {
  const classes = useStyles();
  const data = useMemo(
    () => [
      {
        name: "2 BR Condominium Unit",
        development: "Vertis North",
        location: "Vertis Plaza, Quezon City",
        units: 2,
        isVisible: true,
      },
      {
        name: "1 BR Condominium Unit",
        development: "Vertis North",
        location: "Vertis Plaza, Quezon City",
        units: 2,
        isVisible: false,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Property Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Development",
        accessor: "development",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Available Units",
        accessor: "units",
      },
      {
        Header: "Visible?",
        accessor: "isVisible",
        Cell: VisibilityCell,
        getProps: () => ({ handleCheck: () => alert("clicked") }),
      },
      {
        Header: "",
        accessor: "menu",
        Cell: () => (
          <Icon
            icon="codicon:kebab-vertical"
            color="#828282"
            width="2em"
            height="2em"
          />
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
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
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
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
