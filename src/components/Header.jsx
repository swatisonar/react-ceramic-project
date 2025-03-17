import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import "../style/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const pages = ["Home", "About", "Shop", "Contact"];
  const [open, setOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState("Home");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((text, index) => (
          <Link
            to={"/" + text.toLowerCase()}
            className="menu-link"
            style={{ textDecoration: "none", color: "#025048" }}
            key={text}
            onClick={() => setSelectedPath(text)}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: selectedPath === text ? "grey" : "white",
                }}
              >
                <ListItemText sx={{ textAlign: "center" }} primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: "10rem",
          backgroundColor: "#025048",
        }}
      >
        <Container>
          <Toolbar style={{ marginTop: "2%" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            <Typography className="logo">CeramicShop</Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Link
                    to={"/" + page.toLowerCase()}
                    className="menu-link"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => setSelectedPath(page)}
                  >
                    <Typography
                      sx={{ textAlign: "center", fontSize: "1.3rem" }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Box>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <ShoppingCart sx={{ fontSize: 35 }} />
                </Badge>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
