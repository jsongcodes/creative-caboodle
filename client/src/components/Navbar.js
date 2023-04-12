// import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import { useContext } from "react";
import Link from "@mui/material/Link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import Menu from "@mui/material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7986cb",
    },
    secondary: {
      main: "#b3e5fc",
    },
  },
  typography: {
    fontFamily: [],
  },
});

const MenuItem = withStyles({
  root: {
    justifyContent: "center",
  },
})(MuiMenuItem);

const Navbar = ({ onLogout }) => {
  const [user, setUser] = useContext(UserContext);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        if (res.ok) {
          setUser(null);
        }
      })
      .then(<redirect to="/" />);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: "#F9DDA6" }}>
            <Toolbar>
              <br></br>
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
                      <Link href="/" underline="none">
                        home
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="/my_resources" underline="none">
                        my resources
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/resources" underline="none">
                        resources
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="/topics" underline="none">
                        topics
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="/help" underline="none">
                        ask ChatGPT
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              )}
              <Typography
                color="inherit"
                className="font"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                welcome, @{user.username}!
              </Typography>
              <MenuItem sx={{ color: "#000000" }} onClick={handleLogoutClick}>
                logout
              </MenuItem>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
