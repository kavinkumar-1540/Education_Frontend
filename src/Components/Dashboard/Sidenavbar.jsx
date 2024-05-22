import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Paper,
  IconButton,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../Navbar/Navbar";
import {  useNavigate } from "react-router-dom";
import StudentTable from "./StudentTable";
import CourseForm from "../course_form/CourseForm";


const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 899);
  const [activeMenuItem, setActiveMenuItem] = useState("Students");
  const navigate = useNavigate()


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 899);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (label,component) => {
    if (label === "Logout") {
      // Navigate to login page when Logout is clicked
      navigate('/')
    } else {
      setActiveMenuItem(label); // Update active menu item label
      setActiveComponent(component);
      setDrawerOpen(false);
    }
  };

  const menuItems = [
    { label: "Students", component: <StudentTable/> },
    { label: "Add Course", component: <CourseForm/> },
    { label: "Logout", component: null },
  ];
  const customStyles = `
  .css-1wvake5 {
    border-color: unset !important; /* Override border-color */
  }
`;
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", height: "600px", width: "100%" }}>
        {isMobileView ? (
          <IconButton
            onClick={toggleCollapsed}
            style={{
              position:"absolute",
              top: "5rem",
              color: "#fff",
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ background: "#072C59", textAlign: "center" }}>
            <Sidebar>
            <style>{customStyles}</style>
              <Menu
                iconShape="square"
                style={{
                  background: "#161616",
                  color: "#fff",
                  "&:hover": { background: "none" },
                  textAlign:"left",
                  border: "none",
                }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleMenuClick(item.label,item.component)}
                    style={{
                      background: "#072C59",
                      color: activeMenuItem === item.label ? "#946FFF" : "#fff",
                    }}
                    selected={activeMenuItem === item.label}
                  >
                    <ListItemText primary={item.label} />
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
          </div>
        )}

        {/* Render the Drawer only in mobile view */}
        {isMobileView && (
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleCollapsed}
            variant="temporary"
            ModalProps={{ keepMounted: true }}
            PaperProps={{ style: { background: "#072C59",color: "#fff", } }}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleMenuClick(item.label,item.component)}
                  selected={activeMenuItem === item.label}
                  style={{
                    background: "#072C59",
                    color: "#fff",
                    borderRadius:"6px"
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}

        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#072C59",
            overflowY: "auto"
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "#fff",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            {activeMenuItem}
          </Typography>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              borderRadius: "18px",
              border: "1px solid #B2B2B240",
              boxShadow:"0px 0px 4px 2px rgba(178, 178, 178, 0.25)",
              width: "auto",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {activeComponent || <StudentTable />}
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
