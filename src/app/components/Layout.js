// components/Layout.js
import React from "react";
import Sidebar from "./Sidebar";
import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box display="flex">
      <Sidebar />
      <Container style={{ padding: "16px" }}>{children}</Container>
    </Box>
  );
};

export default Layout;
