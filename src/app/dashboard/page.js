"use client";

import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Divider,
  TextField,
  MenuItem,
  Card,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import usersImg from "../assets/users.png";
import connectImg from "../assets/connect.png";
import routerImg from "../assets/router.png";
import fleetsImg from "../assets/fleets.png";
import teanatsImg from "../assets/teanats.png";
import SearchBar from "../components/SearchBar.js";
import DateRangeSelect from "../components/SelectField";
import DashboardBox from "../components/majorComponents/DashboardBox";
import withAuth from "../components/auth/auth";

// import connectImg from "../../../public/connect.png";
const DashboardPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundColor: "#09111B", padding: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "end", mb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography variant="h6" sx={{ color: "#fff" }}>
              John Doe
            </Typography>
            <Avatar>N</Avatar>
          </Box>
        </Box>
        <Divider sx={{ color: "red", backgroundColor: "lightgrey" }} />

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs="max-content">
            {" "}
            <Box
              sx={{
                backgroundColor: "#4984B5",
                padding: 4,
                borderRadius: 2.5,
                display: "flex",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <Box sx={{ marginRight: "10px" }}>
                <Image
                  src={connectImg}
                  alt="A description of the image"
                  width={80}
                  height="auto"
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  TOTAL DATA EXCAHNGE{" "}
                </Typography>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  80.4 TB
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs="max-content">
            {" "}
            <Box
              sx={{
                backgroundColor: "#4984B5",
                padding: 4,
                borderRadius: 2.5,
                display: "flex",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <Box sx={{ marginRight: "10px" }}>
                <Image
                  src={usersImg}
                  alt="A description of the image"
                  width={80}
                  height="auto"
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  HOTSPOT USERS
                </Typography>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  23K/24.2K
                </Typography>
              </Box>
              <Box>
                <svg
                  width="30"
                  height="67"
                  viewBox="0 0 30 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_142)">
                    <path
                      d="M13.9161 20.9247L23.7068 12.1631L14.0309 2.00001"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_142"
                      x="8.41605"
                      y="0.5"
                      width="21.0084"
                      height="29.9247"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_142"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_142"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
            </Box>
          </Grid>
          <Grid item xs="max-content">
            {" "}
            <Box
              sx={{
                backgroundColor: "#4984B5",
                padding: 4,
                borderRadius: 2.5,
                display: "flex",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <Box sx={{ marginRight: "10px" }}>
                <Image
                  src={routerImg}
                  alt="A description of the image"
                  width={80}
                  height="auto"
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  ONLINE ROUTERS
                </Typography>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  201/345
                </Typography>
              </Box>
              <Box>
                <svg
                  width="30"
                  height="67"
                  viewBox="0 0 30 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_142)">
                    <path
                      d="M13.9161 20.9247L23.7068 12.1631L14.0309 2.00001"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_142"
                      x="8.41605"
                      y="0.5"
                      width="21.0084"
                      height="29.9247"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_142"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_142"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs="max-content">
            {" "}
            <Box
              sx={{
                backgroundColor: "#4984B5",
                padding: 4,
                borderRadius: 2.5,
                display: "flex",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <Box sx={{ marginRight: "10px" }}>
                <Image
                  src={fleetsImg}
                  alt="A description of the image"
                  width={80}
                  height="auto"
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  FLEETS
                </Typography>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  45{" "}
                </Typography>
              </Box>
              <Box>
                <svg
                  width="30"
                  height="67"
                  viewBox="0 0 30 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_142)">
                    <path
                      d="M13.9161 20.9247L23.7068 12.1631L14.0309 2.00001"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_142"
                      x="8.41605"
                      y="0.5"
                      width="21.0084"
                      height="29.9247"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_142"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_142"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
            </Box>
          </Grid>
          <Grid item xs="max-content">
            {" "}
            <Box
              sx={{
                backgroundColor: "#4984B5",
                padding: 4,
                borderRadius: 2.5,
                display: "flex",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <Box sx={{ marginRight: "10px" }}>
                <Image
                  src={teanatsImg}
                  alt="A description of the image"
                  width={80}
                  height="auto"
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  TEANATS
                </Typography>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  23
                </Typography>
              </Box>
              <Box>
                <svg
                  width="30"
                  height="67"
                  viewBox="0 0 30 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_142)">
                    <path
                      d="M13.9161 20.9247L23.7068 12.1631L14.0309 2.00001"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_142"
                      x="8.41605"
                      y="0.5"
                      width="21.0084"
                      height="29.9247"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_142"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_142"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            padding: 2,
            borderRadius: 1,
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box sx={{ marginRight: "30px", height: "100%" }}>
            <SearchBar sx={{ height: "100%" }} />
          </Box>
          <Box>
            <DateRangeSelect />
          </Box>
        </Box>

        <DashboardBox />
      </Grid>
    </Grid>
  );
};

export default withAuth(DashboardPage);
