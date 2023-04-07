import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { useContext } from "react";
import Button from "@mui/material/Button";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { indigo, lightBlue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7986cb",
    },
    secondary: {
      main: "#b3e5fc",
    },
  },
});

const Navbar = ({ onLogout }) => {
  const [user, setUser] = useContext(UserContext);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((res) => {
        console.log("hi");
        if (res.ok) {
          setUser(null);
        }
      })
      .then(<redirect to="/" />);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Creative Caboodle</h1>
        {/* <div className="navbar-background">
        <p className="welcome">welcome, {user.username}!</p>
        <button onClick={handleLogoutClick} className="nav-button">
          logout
        </button>

        <Button
          onClick={handleLogoutClick}
          disabled={false}
          size="small"
          variant="filledTonal"
        >
          logout
        </Button>
        <Link to="/resources" className="nav-button">
          resources
        </Link>
        <Link to="/" className="nav-button">
          home
        </Link>
        <Link to="/topics" className="nav-button">
          topics
        </Link>
        <Link to="/help">ask ChatGPT</Link>
      </div> */}

        <Box sx={{ flexGrow: 1 }}>
          {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
          <AppBar position="static" style={{ background: "#7986cb" }}>
            <Toolbar>
              {auth && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MenuIcon />
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
                    <MenuItem>
                      <Link to="/">home</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/resources">resources</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/topics" className="nav-button">
                        topics
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/help">ask ChatGPT</Link>
                    </MenuItem>
                  </Menu>
                </div>
              )}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                welcome, {user.username}!
              </Typography>
              <MenuItem onClick={handleLogoutClick}>logout</MenuItem>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
