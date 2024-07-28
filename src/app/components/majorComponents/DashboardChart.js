import React from "react";
import { Line } from "react-chartjs-2";
import { Box, Typography, useTheme } from "@mui/material";
import "chart.js/auto";

const DashboardChart = () => {
  const theme = useTheme();

  const data = {
    labels: [
      "05 Mar",
      "06 Mar",
      "07 Mar",
      "08 Mar",
      "09 Mar",
      "10 Mar",
      "11 Mar",
    ],
    datasets: [
      {
        label: "Data Usage",
        data: [1000, 1100, 1200, 1150, 1100, 1050, 600],
        fill: true,
        backgroundColor: "rgba(72, 124, 243, 0.2)",
        borderColor: "rgba(72, 124, 243, 1)",
        tension: 0.4,
        pointBackgroundColor: "rgba(72, 124, 243, 1)",
        pointBorderColor: "rgba(72, 124, 243, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        maxWidth: "600px",
        margin: "auto",
        height: "250px",
      }}
    >
      <Line data={data} options={options} />
      <Box sx={{ textAlign: "center", marginTop: "10px" }}>
        <Typography variant="h6">Tenants Data Usage Pattern</Typography>
      </Box>
    </Box>
  );
};

export default DashboardChart;
