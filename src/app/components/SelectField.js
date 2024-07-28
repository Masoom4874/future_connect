"use client";

import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#1B2A41", // Dark background color
  color: "white", // White text color
  borderRadius: 8,
  "& .MuiSelect-icon": {
    color: "white", // White arrow color
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent", // No border
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent", // No border on hover
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent", // No border when focused
  },
}));

function DateRangeSelect() {
  const [range, setRange] = React.useState("30");

  const handleChange = (event) => {
    setRange(event.target.value);
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth variant="outlined">
        <CustomSelect
          labelId="date-range-label"
          id="date-range-select"
          value={range}
          onChange={handleChange}
          label="Date Range"
        >
          <MenuItem value="7">Last 7 Days</MenuItem>
          <MenuItem value="30">Last 30 Days</MenuItem>
          <MenuItem value="90">Last 90 Days</MenuItem>
          <MenuItem value="custom">Custom Range</MenuItem>
        </CustomSelect>
      </FormControl>
    </Box>
  );
}

export default DateRangeSelect;
