import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import Divider from "@mui/material/Divider";
import logo from "../carszarqa.png";

const pages = ["Login", "Contact", "About us", "Our cars"];

function Header() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let activeStyle = {
    textDecoration: "none",
    color: "white",
    backgroundColor: "cyan",
    marginLeft: "1rem",
    padding: "1rem",
  };

  let notActiveStyle = {
    textDecoration: "none",
    color: "white",
    marginLeft: "1rem",
    padding: "1rem",
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
    googleLogout();
  };
  return (
    <AppBar className="navBarMain">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="logoImg"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              margin: "8px",
            }}
            src={logo}
            alt=""
          />
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOGO
          </Typography> */}
          <Box
            className="navLinks-container"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", flexDirection: "row-reverse" },
            }}>
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              className="navLink">
              CONTACT US
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              className="navLink">
              ABOUT US
            </NavLink>
            <NavLink
              to={`/ourcars/${"s"}`}
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              className="navLink">
              OUR CARS
            </NavLink>

            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              className="navLink">
              Home
            </NavLink>
          </Box>

          {loginData ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    style={{ marginLeft: "1rem" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                <NavLink
                  style={{
                    color: "black",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                  to="/profile">
                  <MenuItem key="Profile" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{"Profile"}</Typography>
                  </MenuItem>
                </NavLink>
                <Divider />

                <button
                  style={{ backgroundColor: "white", border: "none" }}
                  onClick={handleLogout}>
                  <MenuItem key="Logout" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{"Logout"}</Typography>
                  </MenuItem>
                </button>
              </Menu>
            </Box>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              className="navLink">
              LOGIN
            </NavLink>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
