import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../style/home.css";
const Welcome = () => {
  return (
    <Box
      sx={{
        bgcolor: "#025048",
        height: "42rem",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={7}>
            <Typography sx={{ marginTop: "15%" }}>
              <h3 className="welcome-text">Welcome to ceramic shop</h3>
              <div>
                <h1 className="welcome-text2">
                  Elevate Your Space with Ceramic Elegance.
                </h1>
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  fontFamily: "fangsong",
                }}
              >
                Starting from just $149.00
              </h3>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "1rem",
                  color: "white",
                  borderColor: "white",
                }}
              >
                SHOP NOW
              </Button>
            </Typography>
          </Grid>
          <Grid size={5}>
            <Box >
              <img
                src={require("../assets/hero-01.jpg")}
                style={{
                  position: "relative",
                  overflow: "auto",
                }}
              />
              <img
                src={require("../assets/hero-02.jpg")}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Welcome;
