import React, {  useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
} from "@mui/icons-material";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
 const [openDrawer, setOpenDrawer] = useState(false);

  const pages = [
    { name: "Home", path: "/" },
    { name: "Students", path: "/student" },
    { name: "Dashboard", path: "/dashboard" },
  ];


  const handleMenuClick = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  return (
    <>
      <div>
        <AppBar
          position={ "sticky"}
          style={{ background: "#000000", boxShadow: "none" }}
        >
          <Toolbar>
            <Box
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={handleMenuClick} // Open menu on click
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={NavLink}
                  to={page.path}
                  color="inherit"
                  sx={{ mx: 1 }}
                  style={{ color: page.color }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={handleDrawerClose}
          sx={{
            "& .MuiDrawer-paper": { background: "#FFFFFF", color: "#000000" },
          }}
        >
          <List>
            {pages.map((page) => (
              <ListItem
                button
                key={page.name}
                component={NavLink}
                to={page.path}
              >
                <ListItemText primary={page.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
