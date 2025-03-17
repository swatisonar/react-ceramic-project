import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const WelcomeSec4 = () => {
  const products = [
    {
      category: "Ceramic",
      name: "Ceramic Cup",
      image: require("../assets/ceramic-cup-01-300x300.jpg"),
      rating: 4,
      initial_price: 189,
      discounted_price : 170,
    },
    {
      category: "Ceramic",
      name: "Ceramic Planter",
      image: require("../assets/ceramic-planter-01-300x300.jpg"),
      rating: 3,
      initial_price: 299,
      discounted_price : 170,
    },
    {
      category: "Ceramic",
      name: "Ceramic Plates",
      image: require("../assets/product-01-300x300.jpg"),
      rating: 4,
      initial_price: 189,
      discounted_price : 170,
    },
    {
      category: "Ceramic",
      name: "Ceramic Plates and Bowls",
      image: require("../assets/product-02-300x300.jpg"),
      rating: 4,
      initial_price: 399,
      discounted_price : 170,
    },
    {
      category: "Ceramic",
      name: "Ceramic Plates and Spoons",
      image: require("../assets/product-07-300x300.jpg"),
      rating: 4,
      initial_price: 119,
      discounted_price : 170,
    },
    {
      category: "Ceramic",
      name: "Ceramic Vases and Planters",
      image: require("../assets/contact-01-300x300.jpg"),
      rating: 4,
      initial_price: 189,
      discounted_price : 170,
    },
  ];
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
            marginTop: "12%",
          }}
        >
          Most Popular
        </Typography>

        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "500",
            fontFamily: "Playfair Display",
            color: "#025048",
            lineHeight: "1",
            marginTop: "3%",
          }}
        >
          Discover the Latest Additions at Your Top Choice Flower Shop
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            marginTop: "5%",
          }}
        >
          {products.map((item, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <img src={item.image}></img>
              <Typography
                sx={{
                  fontSize: ".85em",
                  marginBottom: ".5em",
                  display: "block",
                  lineHeight: "1.3",
                  opacity: ".6",
                  marginTop: "2%",
                }}
              >{item.category}</Typography>
              <Typography
               sx={{
                fontSize: "1.37em",
                marginBottom: ".5em",
                display: "block",
                lineHeight: "1.2",
                color: "#025048",
                fontWeight: "500",
                fontFamily: 'Playfair Display, serif',
            
              }}>{item.name}</Typography>
              <Typography
               sx={{
                fontSize: "1.125rem",
                display: "block",
                lineHeight: "1.2",
                fontWeight: "800",
                color:"#424b4a",
              }}
              >
                ${item.discounted_price}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomeSec4;
