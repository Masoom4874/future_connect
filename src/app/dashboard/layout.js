"use client"; // Add this line

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Box, Grid } from "@mui/material";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box display="flex" sx={{ height: "100vh", backgroundColor: "#09111B" }}>
      <Grid container>
        <Grid item xs={collapsed ? 0.5 : 1.8}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </Grid>
        <Grid item xs={collapsed ? 11.5 : 10.2}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardLayout;
