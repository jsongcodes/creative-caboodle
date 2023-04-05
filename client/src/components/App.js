import "../App.css";
import { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TopicList from "./TopicList";
import Login from "./Login";
import ResourceList from "./ResourceList";
import Topic from "./Topic";
import Resource from "./Resource";
import Home from "./Home";
import { SampleContext } from "../context/sample";
import Chat from "./Chat";
import ResourceForm from "./ResourceForm";

const App = () => {
  const [user, setUser] = useContext(SampleContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [topics, setTopics] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser({
            id: user.id,
            username: user.username,
            email: user.email,
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
      <Navbar handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/topics">
          <TopicList topics={topics} setTopics={setTopics} />
        </Route>
        <Route exact path="/topics/:id">
          <Topic resources={resources} setResources={setResources} />
        </Route>
        <Route
          exact
          path="/resources/:id"
          render={({ match }) => (
            <Resource
              resource={resources.find(
                (resource) => resource.id === parseInt(match.params.id)
              )}
              setResources={setResources}
            />
          )}
        ></Route>
        <Route exact path="/resources">
          <ResourceList setResources={setResources} resources={resources} />
        </Route>
        <Route exact path="/newresource">
          <ResourceForm setResources={setResources} resources={resources} />
        </Route>
        <Route exact path="/help">
          <Chat />
        </Route>
      </Switch>
    </>
  );
};

export default App;
