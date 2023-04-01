import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <p className="accountquestion">new here?</p> 
            <button onClick={() => setShowLogin(false)}>sign up</button>
          </>
        ) : (
          <>
            <SignupForm onLogin={onLogin} />
            <button onClick={() => setShowLogin(true)}>log in</button>
          </>
        )}

    </>
  );
};

export default Login;
