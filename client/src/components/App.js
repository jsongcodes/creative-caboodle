import "../App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TopicList from "./TopicList";
import Login from "./Login";
import TopicForm from "./TopicForm";
import Topic from "./Topic";
import Resource from "./Resource";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [topics, setTopics] = useState([]);
  const [resources, setResources] = useState([]);

  const addNewTopic = (newTopic) => {
    setTopics((topics) => [newTopic, ...topics]);
  };

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
      <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <TopicList topics={topics} setTopics={setTopics} />
        </Route>
        <Route exact path="/newtopic">
          <TopicForm
            userId={user.id}
            addNewTopic={addNewTopic}
            topics={topics}
          />
        </Route>
        <Route exact path="/topics/:id">
          <Topic
            userId={user.id}
            user={user}
            resources={resources}
            setResources={setResources}
          />
        </Route>

        {/* not working */}
        <Route
          exact
          path="/topics/:topic_id/resources/:id"
          render={({ match }) => (
            <Resource
              resource={resources.find(
                (resource) => resource.id === parseInt(match.params.id)
              )}
              user={user}
              // topicId={params.id}
              // userId={userId}
              setResources={setResources}
            />
          )}
        ></Route>
      </Switch>
    </>
  );
};

export default App;
