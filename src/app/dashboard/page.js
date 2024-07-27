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

import connectImg from "../../../public/connect.png";
const DashboardPage = () => {
  return (
    <Grid container>
      {/* Main Content */}
      <Grid item xs={12} sx={{ backgroundColor: "#09111B", padding: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "end", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography variant="h6" sx={{ color: "#fff" }}>
              John Doe
            </Typography>
            <Avatar>N</Avatar>
          </Box>
        </Box>
        <Divider sx={{ color: "red", backgroundColor: "lightgrey" }} />

        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={3.5}>
            <Card sx={{ display: "flex" }}>
              <Image
                src={connectImg}
                alt="A description of the image"
                width={500} // Adjust the width as needed
                height={300} // Adjust the height as needed
              />{" "}
            </Card>
          </Grid>
          <Grid item xs={3.5}>
            <Box
              sx={{ backgroundColor: "#4984B5", padding: 4, borderRadius: 2.5 }}
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Hotspot Users
              </Typography>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                23K/24.2K
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3.5}>
            <Box
              sx={{ backgroundColor: "#4984B5", padding: 4, borderRadius: 2.5 }}
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Online Routers
              </Typography>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                201/345
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={3}>
            <Box
              sx={{ backgroundColor: "#4984B5", padding: 4, borderRadius: 2.5 }}
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Total Data Exchanged
              </Typography>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                80.4 TB
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{ backgroundColor: "#4984B5", padding: 4, borderRadius: 2.5 }}
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Hotspot Users
              </Typography>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                23K/24.2K
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <TextField
            label="Search for Tenant"
            variant="outlined"
            sx={{ backgroundColor: "#4984B5", color: "#fff", width: "30%" }}
            InputProps={{ style: { color: "#fff" } }}
          />
          <TextField
            select
            label="Last 30 Days"
            variant="outlined"
            sx={{ backgroundColor: "#4984B5", color: "#fff", width: "15%" }}
            InputProps={{ style: { color: "#fff" } }}
          >
            <MenuItem value="30">Last 30 Days</MenuItem>
            <MenuItem value="60">Last 60 Days</MenuItem>
            <MenuItem value="90">Last 90 Days</MenuItem>
          </TextField>
        </Box> */}

        <Box sx={{ backgroundColor: "#4984B5", padding: 2, borderRadius: 1 }}>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Tenants Data Usage Pattern
          </Typography>
          {/* Here you can insert a chart component */}
        </Box>

        <Box
          sx={{
            backgroundColor: "#4984B5",
            padding: 2,
            borderRadius: 1,
            mt: 4,
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Top Tenants
          </Typography>
          {/* Here you can insert a table component for displaying data */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
