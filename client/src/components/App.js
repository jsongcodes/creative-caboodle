import "../App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TopicList from "./TopicList";
import Login from "./Login";

import TopicForm from "./TopicForm";
import NoteList from "./NoteList";
import Topic from "./Topic";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser({
            id: user.id,
            username: user.username,
          });
        });
      }
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <div>App component</div>
      <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <TopicList />
        </Route>
        <Route exact path="/newtopic">
          <TopicForm />
        </Route>
        <Route exact path="/notes">
          <NoteList />
        </Route>
        <Route exact path="/topics/:id">
          <Topic />
        </Route>
      </Switch>
    </>
  );
};

export default App;
