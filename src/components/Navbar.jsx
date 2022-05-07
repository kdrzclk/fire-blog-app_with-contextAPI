import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import cwLogo from "../assets/cw.jpeg";
import { useAuth } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

const styles = {
  title: {
    mx: "auto",
    cursor: "pointer",
    fontFamily: "Girassol",
    "& span": {
      fontSize: "25px",
      color: "wheat",
    },
  },
};

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    logout();
  };

  const handleDashboard = () => {
    setAnchorEl(null);
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#046582" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDashboard}
          >
            <img src={cwLogo} alt="clarusway" width="40px" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={styles.title}
            onClick={handleDashboard}
          >
            ──── <span style={{ color: "#F5DEB3" }}>{"<KaDiR/>"}</span> BLOG
            ────
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle sx={{ fontSize: "40px" }} />
            </IconButton>
            {currentUser?.email ? (
              <>
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
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>

                  <Link to="/new-blog">
                    <MenuItem onClick={handleClose}>New Blog</MenuItem>
                  </Link>

                  <Link to="/login">
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  </Link>
                </Menu>
              </>
            ) : (
              <>
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
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                  </Link>

                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Register</MenuItem>
                  </Link>
                </Menu>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
