import "../App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TopicList from "./TopicList";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok){
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser({
            id: user.id,
            username: user.username
          });
        });
      }
    });
  }, [])

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <div>App component</div>
      <Navbar/>
      <TopicList />
      <Login/>
    </>
  );
}

export default App;
