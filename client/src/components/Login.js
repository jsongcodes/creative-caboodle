import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme } from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7986cb',
    },
    secondary: {
      main: '#b3e5fc',
    },
  },
});

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <Button
                onClick={() => setShowLogin(false)}
                disabled={false}
                size="small"
                variant="filledTonal"
                type="submit"
              >
                sign up
              </Button>
              {/* <button onClick={() => setShowLogin(false)}>sign up</button> */}
            </>
          ) : (
            <>
              <SignupForm onLogin={onLogin} />
              <Button
                onClick={() => setShowLogin(true)}
                disabled={false}
                size="small"
                variant="filledTonal"
                type="submit"
              >
                log in
              </Button>
              {/* <button onClick={() => setShowLogin(true)}>log in</button> */}
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Login;
