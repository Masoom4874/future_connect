"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Avatar,
  Divider,
  Pagination,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/material/styles";
import SearchBar from "../components/auditComponets/searchBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import withAuth from "../components/auth/auth";

const data = [
  {
    time: "11/02/24, 02:33 PM",
    description:
      "Admin user Roshan Agarwal with the role Tenant Admin was created",
    event: "Create",
    category: "Admin",
    performedBy: "Fletcher Fernandes",
  },
  {
    time: "11/02/24, 01:52 PM",
    description:
      "A firewall rule allowing traffic from IP addresses to be accepted was created.",
    event: "Create",
    category: "Firewall Rule",
    performedBy: "Sachin Gowda",
  },
  {
    time: "11/02/24, 01:23 PM",
    description: "Certificate downloaded for router Tranquil Sea.",
    event: "Download",
    category: "Router Certificate",
    performedBy: "Mukesh Sai Kumar",
  },
  {
    time: "11/02/24, 01:11 PM",
    description:
      "Hotspot user JohnDoe was deleted from router Mianzimu (HCQ083QNSNF).",
    event: "Delete",
    category: "Hotspot User",
    performedBy: "Vishal Dubey",
  },
  {
    time: "11/02/24, 01:01 PM",
    description: "Firewall template Dualog was deleted",
    event: "Delete",
    category: "Firewall Template",
    performedBy: "Vishal Dubey",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },

  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
  {
    time: "11/02/24, 12:58 PM",
    description: "New router RUDRA23 (FFO44QNSNF) was created",
    event: "Update",
    category: "Router",
    performedBy: "Karan Sajnani",
  },
];

const CustomTableCell = styled(TableCell)({
  color: "#fff",
  borderBottom: "1px solid #2C3A47",
});

const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    color: "#fff",
    "&.Mui-selected": {
      backgroundColor: "#1B2A41",
    },
    "&:hover": {
      backgroundColor: "#1B2A41",
    },
  },
});

const Page = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; // Number of rows per page

  // Calculate the paginated data
  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#09111B",
        minHeight: "100vh",
        color: "#fff",
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "end", mb: 1, mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            John Doe
          </Typography>
          <Avatar>N</Avatar>
        </Box>
      </Box>
      <Divider sx={{ color: "red", backgroundColor: "lightgrey", mb: 3 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          Audit Trail
        </Typography>
        <IconButton sx={{ color: "white" }}>
          <DownloadIcon />{" "}
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Download log
          </Typography>
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          sx={{
            width: "20%",
            borderRadius: 2,
            padding: 2,
          }}
        >
          <Typography variant="h6">Category</Typography>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              backgroundColor: "#0C1829",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <Select
              value=""
              displayEmpty
              sx={{ color: "#fff" }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Select an option</em>
              </MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Firewall Rule">Firewall Rule</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" sx={{ mt: 3 }}>
            Action
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Checkbox color="primary" sx={{ color: "#fff" }} />
              <Typography>Create</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Checkbox color="primary" sx={{ color: "#fff" }} />
              <Typography>Delete</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Checkbox color="primary" sx={{ color: "#fff" }} />
              <Typography>Update</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Checkbox color="primary" sx={{ color: "#fff" }} />
              <Typography>Download</Typography>
            </Box>
          </Box>
          <Typography variant="h6" sx={{ mt: 3 }}>
            User
          </Typography>
          <Box>
            <SearchBar />
          </Box>
          <Typography variant="h6" sx={{ mt: 3 }}>
            Date
          </Typography>
          <TextField
            fullWidth
            placeholder="End date"
            type="date"
            variant="outlined"
            sx={{ mt: 1, backgroundColor: "#1B2A41", borderRadius: 2 }}
            InputProps={{
              style: { color: "#fff" },
            }}
          />
          <TextField
            fullWidth
            placeholder="End date"
            type="date"
            variant="outlined"
            sx={{ mt: 1, backgroundColor: "#1B2A41", borderRadius: 2 }}
            InputProps={{
              style: { color: "#fff" }, // Sets the text color
            }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: "#1C2734",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "rgba(9, 17, 27, 1)" }}>
                  <CustomTableCell sx={{ borderBottom: "2px solid #3B4B5A" }}>
                    Time
                  </CustomTableCell>
                  <CustomTableCell sx={{ borderBottom: "2px solid #3B4B5A" }}>
                    Description
                  </CustomTableCell>
                  <CustomTableCell sx={{ borderBottom: "2px solid #3B4B5A" }}>
                    Event
                  </CustomTableCell>
                  <CustomTableCell sx={{ borderBottom: "2px solid #3B4B5A" }}>
                    Category
                  </CustomTableCell>
                  <CustomTableCell sx={{ borderBottom: "2px solid #3B4B5A" }}>
                    Performed By
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor:
                        index % 2 === 0 ? "#122743" : "rgba(9, 17, 27, 1)",
                    }}
                  >
                    <CustomTableCell>{row.time}</CustomTableCell>
                    <CustomTableCell>{row.description}</CustomTableCell>
                    <CustomTableCell>{row.event}</CustomTableCell>
                    <CustomTableCell>{row.category}</CustomTableCell>
                    <CustomTableCell>{row.performedBy}</CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: 2,
              color: "#fff",
            }}
          >
            <CustomPagination
              count={Math.ceil(data.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#ffffff",
                  borderRadius: "20%", // Round pagination buttons
                  border: "1px solid #3B4B5A",
                  "&.Mui-selected": {
                    backgroundColor: "#3B4B5A",
                    color: "#fff",
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withAuth(Page);
