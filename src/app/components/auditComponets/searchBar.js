"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    backgroundColor: "#1B2A41",
    color: "white",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-input": {
      color: "white", // White text color
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
}));

function SearchBar() {
  return (
    <CustomTextField
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: "white" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
