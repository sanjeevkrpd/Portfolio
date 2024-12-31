import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DevicesIcon from "@mui/icons-material/Devices";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-scroll";  // Importing Link from react-scroll
import "./Navbar.css";

const drawerWidth = 240;

const navItems = [
  { label: "Home", icon: <HomeIcon />, target: "home-section" },
  { label: "About", icon: <InfoIcon />, target: "about-section" },
  { label: "Skills", icon: <DevicesIcon />, target: "skills-section" },
  { label: "Resume", icon: <DataObjectIcon />, target: "resume-section" },
  { label: "Contact", icon: <ContactMailIcon />, target: "contact-section" },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#0ef",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              },
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccountCircleIcon sx={{ marginRight: 1, color: "#0ef" }} />
            Portfolio
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            {navItems.map((item) => (
              <Link
                to={item.target}
                smooth={true}
                duration={500}
                key={item.label}
                style={{ textDecoration: "none" }} 
              >
                <Button
                  className="nav-btn"
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    padding: "6px 16px",
                    marginRight: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#0ef",
                      "& .MuiSvgIcon-root": {
                        color: "#0ef",
                      },
                    },
                  }}
                >
                  {item.icon}
                  <Typography sx={{ marginLeft: 1 }}> {item.label}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
  <Drawer
    container={container}
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true,
    }}
    sx={{
      display: { xs: "block", sm: "none" }, // Only show the drawer on mobile (xs) screens
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth, // Set drawer width
        backgroundColor: "#16185c",
        color: "#fff",
        height: "100%", // Ensure drawer takes up full height
        position: "absolute", // Ensure drawer covers the screen when open
      },
    }}
  >
    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 2, height: "100%" }}>
      {navItems.map((item) => (
        <Link
          to={item.target}
          smooth={true}
          duration={500}
          key={item.label}
          style={{ textDecoration: "none" }}  
        >
          <Button
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              padding: "12px 26px",
              marginBottom: 1,
              marginLeft : 2,
              paddingRight : 8,
              justifyContent: "flex-start", // Align text to the left inside the button
              "&:hover": {
                backgroundColor: "#0ef",
                color: "#16185c",
                transform: "scale(1.05)",
              },
            }}
          >
            <span style={{ color: "inherit" }}>{item.icon}</span>
            <Typography sx={{ marginLeft: 3 }}>{item.label}</Typography>
          </Button>
        </Link>
      ))}
    </Box>
  </Drawer>
</nav>

    </Box>
  );
};

export default Navbar;
