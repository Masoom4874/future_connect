import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,

    backgroundColor: "#1B2A41",
    color: theme.palette.common.white,
    borderBottom: "1px solid #fff", // Add bottom border to the header
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    backgroundColor: "rgba(18, 39, 68, 0.34)",
    color: theme.palette.common.white,
    borderBottom: 0, // Remove bottom border from the body cells
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#2B3A50",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Data for the table
const rows = [
  { no: 1, name: "RUDRA", usage: "22.4 GB" },
  { no: 2, name: "Vashi Office", usage: "34.5 GB" },
  { no: 3, name: "Station Satcom", usage: "64.2 GB" },
  { no: 4, name: "Eastaway", usage: "13.2 GB" },
  { no: 5, name: "NPDL", usage: "76.2 GB" },
];

export default function DashboardTable() {
  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "#1B2A41", maxHeight: 320, overflow: "auto" }}
    >
      <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Data Usage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell>{row.no}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.usage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
