import { useState } from "react";

const SignupForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSignup = (e) => {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <>
      <div>SignupForm component</div>
      <form onSubmit={handleSignup}>
          <label>username</label>
          <input
            type="text"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        
        <button type="submit">sign up</button>
        
          {errors.map((err) => (
            <error key={err}>{err}</error>
          ))}
        
      </form>
    </>
  );
};

export default SignupForm;
