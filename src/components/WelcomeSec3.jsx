import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../style/welcomeSec3.css";

const WelcomeSec3 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f1f4f1",
        marginTop: "10%",
        height: "70rem",
      }}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid size={6}>
            <Typography
              sx={{
                color: "#025048",
                fontSize: "0.875rem",
                fontWeight: "500",
                fontFamily: "Work Sans",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginTop: "15%",
              }}
            >
              THE BEST OR CERMAICS
            </Typography>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: "500",
                fontFamily: "Playfair Display, serif",
                color: "#424b4a",
              }}
            >
              Our Products Category​
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
              Explore our exquisite collection of ceramic treasures that elevate
              your spaces and celebrate the artistry of craftsmanship. From
              dinnerware to decor, each piece in our product range is a
              testament to quality, style, and the timeless beauty of ceramics.
            </Typography>
            <Box
              sx={{
                backgroundImage: `url(${require("../assets/category-01.jpg")})`,
                backgroundPosition: "center center",
                marginTop: "5%",
                backgroundRepeat: "no-repeat",
                padding: "8%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "3%",
                  marginTop: "100%",
                }}
              >
                <Typography className="prod-name">
                  Stylish Ceramic Home Decor
                </Typography>
                <Typography className="price-details">
                  Starting from just $99.00
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              sx={{
                backgroundImage: `url(${require("../assets/category-02.jpg")})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                padding: "8%",
                marginTop: "-16%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "3%",
                  marginTop: "100%",
                }}
              >
                <Typography className="prod-name">
                  Trending Ceramic Dinnerware
                </Typography>
                <Typography className="price-details">
                  Starting from just $299.00
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundImage: `url(${require("../assets/category-03.jpg")})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                padding: "8%",
                marginTop: "5%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "3%",
                  marginTop: "100%",
                }}
              >
                <Typography className="prod-name">
                  Garden and Outdoor Accents
                </Typography>
                <Typography className="price-details">
                  Starting from just $149.00
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomeSec3;
