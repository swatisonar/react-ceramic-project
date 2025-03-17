import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const WelcomeSec5 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../assets/cta-bg.jpg")})`,
        backgroundRepeat: "no-repeat",
        height: "20rem",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        marginTop: "10%",
        padding: "14%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          textAlign: "center",
          padding: "5%",
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "500",
            fontFamily: "Playfair Display",
            color: "#025048",
            lineHeight: "1",
          }}
        >
          Begin Your Ceramic Journey Explore Our Stunning Collections
        </Typography>

        <Typography >
          <Typography
            sx={{
              fontSize: "2rem",
              fontFamily: "fangsong",
              color: "#025048",
              marginTop:"4%"
            }}
          >
            Starting from just $149.00
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "1rem",
              color: "#025048",
              borderColor: "#025048",
              marginTop:"1%",
              padding:"1% 3%"
            }}
          >
            SHOP NOW
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeSec5;
