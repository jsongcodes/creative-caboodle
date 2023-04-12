import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {showLogin ? (
            <>
              <LoginForm setShowLogin={setShowLogin} onLogin={onLogin} />
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
            </>
          )}
        </Box>
    </>
  );
};

export default Login;
