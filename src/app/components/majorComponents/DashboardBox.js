import * as React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DashboardTable from "./DashboardTable";
import DashboardChart from "./DashboardChart";

// Custom styled box
const CustomBox = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(2),
  backgroundColor: "rgba(18, 39, 68, 0.34)",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
}));

function DashboardBox() {
  return (
    <CustomBox>
      <Box width="50%" height="100%">
        <DashboardChart />
      </Box>

      <Box width="50%">
        <DashboardTable />
        <Typography variant="h6" align="center">
          Top Tenants
        </Typography>
      </Box>
    </CustomBox>
  );
}

export default DashboardBox;
