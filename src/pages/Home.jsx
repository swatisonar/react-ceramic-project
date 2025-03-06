import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import "../style/home.css";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div>
      {/* <Box sx={{ bgcolor: '#025048', height: '100vh', width: '100%' }}>

        </Box> */}
      <Box
        sx={{
          bgcolor: "#025048",
          paddingLeft: "5%",
          paddingRight: "5%",
          height: "46rem",
        }}
      >
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <Typography sx={{ marginTop: "15%" }}>
              <h3 className="welcome-text">Welcome to ceramic shop</h3>
              <div>
                <h1 className="welcome-text2">
                  Elevate Your Space with Ceramic Elegance.
                </h1>
              </div>
              <h3
                style={{
                  fontSize: "2rem",
                  color: "white",
                  fontFamily: "fangsong",
                  marginTop: "-3%",
                }}
              >
                Starting from just $149.00
              </h3>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "1.5rem",
                  color: "white",
                  padding: "15px",
                  borderColor: "white",
                }}
              >
                SHOP NOW
              </Button>
            </Typography>
          </Grid>
          <Grid size={6}>
            <Box sx={{ marginLeft: "25%" }}>
              <img
                src={require("../assets/still-life-790381_1280.jpg")}
                style={{
                  width: "75%",
                  height: "50rem",
                  position: "relative",
                  overflow: "auto",
                }}
              />
              <img
                src={require("../assets/flower-3541205_1280.jpg")}
                style={{
                  width: "18%",
                  position: "absolute",
                  left: "50%",
                  top: "30%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
