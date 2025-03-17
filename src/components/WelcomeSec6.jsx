import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const WelcomeSec6 = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (id) => {
    console.log("hoveredIcon-->" + id);
    setHoveredIcon(id);
  };
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };
  const products = [
    {
      id: 1,
      category: "Pottery",
      name: "Ceramic Bottles",
      image: require("../assets/product-09-300x300.jpg"),
      rating: 3,
      initial_price: 299,
      discounted_price: 170,
    },
    {
      id: 2,
      category: "Ceramic",
      name: "Ceramic Cup",
      image: require("../assets/ceramic-cup-01-300x300.jpg"),
      rating: 4,
      initial_price: 189,
      discounted_price: 170,
    },
    {
      id: 3,
      category: "Ceramic",
      name: "Ceramic Drink Coasters",
      image: require("../assets/product-03-300x300.jpg"),
      rating: 3,
      initial_price: 299,
      discounted_price: 170,
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
          Trending Now
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
          Minimalist Ceramic Designs
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
              <Box
                sx={{
                  // backgroundImage: `url(${item.image})`,
                  // backgroundPosition: "center center",
                  // backgroundRepeat: "no-repeat",
                  // padding: "40%",
                  position: "relative",
                }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <img src={item.image} />
                {/* {hoveredIcon === item.id && ( */}
                  <Stack direction={"row"}>
                    <Chip label="Sale!"
                    size="small"
                     sx={{
                      marginLeft: "184%",
                      marginTop: "-332%",
                      backgroundColor: "white",
                      position: "absolute",
                      top: "407%",
                      left: "-181%",
                      zIndex: 9,
                      opacity: "0.8",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                     />
                    <IconButton
                      aria-label="add to shopping cart"
                      sx={{
                        marginLeft: "184%",
                        marginTop: "-332%",
                        backgroundColor: "white",
                        position: "absolute",
                        top: "407%",
                        left: "-118%",
                        zIndex: 9,
                      }}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Stack>
                {/* )} */}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: ".85em",
                    marginBottom: ".5em",
                    display: "block",
                    lineHeight: "1.3",
                    opacity: ".6",
                    marginTop: "2%",
                  }}
                >
                  {item.category}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.37em",
                    marginBottom: ".5em",
                    display: "block",
                    lineHeight: "1.2",
                    color: "#025048",
                    fontWeight: "500",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    opacity: ".6",
                  }}
                >
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    display: "block",
                    lineHeight: "1.2",
                    fontWeight: "800",
                    color: "#424b4a",
                  }}
                >
                  <span
                    style={{
                      paddingRight: "3%",
                      opacity: 0.6,
                      textDecoration: "line-through",
                    }}
                  >
                    ${item.initial_price}
                  </span>
                  ${item.discounted_price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomeSec6;
