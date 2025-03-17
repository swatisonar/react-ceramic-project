import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "25rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <img src={require("../assets/footer-cta.jpg")} />
        </Box>
        <Box
          sx={{
            bgcolor: "#025048",
            padding: "6%",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "500",
              fontFamily: "Playfair Display",
              color: "white",
              lineHeight: "1",
              marginTop: "3%",
            }}
          >
            Uncover the World of Ceramic Artistry Start Your Journey Here!
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "1rem",
              color: "white",
              borderColor: "white",
              marginTop: "8%",
            }}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
      sx={{
        marginTop:"3%",
        marginBottom:"3%",
      }}
      >
        <Container>
          <Stack direction="row" spacing={30}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
                fontFamily: "Playfair Display",
                color: "#025048",
                lineHeight: "1",
                marginTop: "3%",
              }}
            >
              CeramicShop
            </Typography>
            <Stack direction="row" spacing={3}>
                <Typography
                sx={{
                    color: "#025048",
                }}
                >
                    HOME
                </Typography>
                <Typography
                 sx={{
                    color: "#025048",
                }}>
                    ABOUT
                </Typography>
                <Typography
                 sx={{
                    color: "#025048",
                }}>
                    SHOP
                </Typography>
                <Typography
                 sx={{
                    color: "#025048",
                }}>
                    CONTACT
                </Typography>
                </Stack>
            <Stack direction="row" spacing={3}>
               <FacebookIcon sx={{
                    color: "#025048",
                }} />
               <XIcon 
               sx={{
                color: "#025048",
            }}/>
               <InstagramIcon 
               sx={{
                color: "#025048",
            }}/>
               <YouTubeIcon 
               sx={{
                color: "#025048",
            }}/>
                
            
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
