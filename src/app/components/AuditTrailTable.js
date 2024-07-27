// components/AuditTrailTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const data = [
  {
    time: "11/02/24, 02:33 PM",
    description:
      "Admin user Roshan Agarwal with the role Tenant Admin was created",
    event: "Create",
    category: "Admin",
    performedBy: "Fletcher Fernandes",
  },
  // Additional data rows...
];

const AuditTrailTable = () => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" gutterBottom style={{ padding: "16px" }}>
        Audit Trail
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Performed By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.event}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.performedBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AuditTrailTable;
