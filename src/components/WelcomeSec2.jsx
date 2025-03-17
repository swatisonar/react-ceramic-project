import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const WelcomeSec2 = () => {
  return (
    <Box>
      <Container>
        <Typography
          sx={{
            color: "#025048",
            fontSize: "0.875rem",
            fontWeight: "500",
            fontFamily: "Work Sans",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginTop: "10%",
          }}
        >
          About Ceramic Shop
        </Typography>

        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "500",
            fontFamily: "Playfair Display",
            color: "#025048",
            lineHeight:"1",
            marginTop: "3%",
          }}
        >
          The versatility of ceramics is what makes them truly remarkable, with
          their presence in various forms such as stoneware and porcelain.
        </Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <Box
            sx={{
              marginTop: "5%",
            }}
            >
              <img
                src={require("../assets/about-01.jpg")}
              
              />
            </Box>
          </Grid>
          <Grid size={6}>
            <Box >
              <img
                src={require("../assets/about-02.jpg")}
                style={{
                  marginTop: "22%",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  lineHeight: "1.4em",
                  fontWeight: "500",
                  fontFamily: "Playfair Display, serif",
                  color: "#025048",
                  marginTop: "3%",
                }}
              >
                Welcome to Ceramic Shop, where passion meets craftsmanship to
                bring you a world of timeless beauty and creativity.
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontStyle: "inherit",
                  fontWeight: "inherit",
                  verticalAlign: "baseline",
                  marginTop: "3%",
                  fontFamily: "Work Sans",
                }}
              >
                Our journey is steeped in the art of ceramics, where each piece
                tells a unique story. Get to know the heart and soul behind our
                store.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "1rem",
                  color: "#025048",
                  borderColor: "#025048",
                  marginTop: "4%",
                }}
              >
                READ MORE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomeSec2;
