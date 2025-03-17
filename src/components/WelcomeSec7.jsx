import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

const WelcomeSec7 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f1f4f1",
        marginTop: "10%",
        height: "30rem",
      }}
    >
      <Container>
        <Typography
          sx={{
            color: "#025048",
            fontSize: "0.875rem",
            fontWeight: "500",
            fontFamily: "Work Sans",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            lineHeight: "5",
          }}
        >
          Testimonial
        </Typography>

        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "500",
            fontFamily: "Playfair Display",
            color: "#025048",
            lineHeight: "1",
            marginTop: "1%",
          }}
        >
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          <Grid size={6}>
            <Box
              sx={{
                marginTop: "7%",
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  padding: "7%",
                  fontFamily: "Work Sans",
                }}
              >
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    backgroundImage: `url(${require("../assets/testimonial-skip-01.jpg")})`,
                    marginLeft: "6% !important",
                    backgroundRepeat: "no-repeat",
                    padding: "2%",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                  }}
                ></Box>
                <Stack direction="column">
                  <Typography
                    sx={{
                      color: "#025048",
                      lineHeight: "1.5",
                      fontFamily: "Work Sans",
                    }}
                  >
                    Wade Warren
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85em",
                      fontFamily: "Work Sans",
                    }}
                  >
                    Business Man
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              sx={{
                marginTop: "7%",
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  padding: "7%",
                  fontFamily: "Work Sans",
                }}
              >
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Box
                  sx={{
                    backgroundImage: `url(${require("../assets/testimonial-skip-02.jpg")})`,
                    marginLeft: "6% !important",
                    backgroundRepeat: "no-repeat",
                    padding: "2%",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                  }}
                ></Box>
                <Stack direction="column">
                  <Typography
                    sx={{
                      color: "#025048",
                      lineHeight: "1.5",
                      fontFamily: "Work Sans",
                    }}
                  >
                    Mila Kunis
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85em",
                      fontFamily: "Work Sans",
                    }}
                  >
                    Fashion Designer
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WelcomeSec7;
