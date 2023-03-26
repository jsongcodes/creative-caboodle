import { useEffect } from "react";
import ResourceCard from "./ResourceCard";

import { Switch, Route } from "react-router-dom";
import Resource from "./Resource";

const ResourceList = ({ topicId, userId, user, setResources, resources }) => {
  useEffect(() => {
    fetch(`/topics/${topicId}/resources`)
      .then((res) => res.json())
      .then(setResources)
      //resources is not being set into state
      .then(console.log("resources: ", resources));
  }, [topicId]);

  const resourceList = [...resources].map((resource) => {
    return (
      <ResourceCard
        key={resource.id}
        resource={resource}
        topicId={topicId}
        resources={resources}
      />
    );
  });

  return (
    <>
      {/* <Switch>
        <Route
          exact
          path="topics/:topic_id/resources/:id"
          render={({ computedmatch }) => (
            <Resource
              resource={resources.find(
                (resource) => resource.id === parseInt(computedmatch.params.id)
              )}
              user={user}
            />
          )}
        ></Route>
      </Switch> */}
      <div>{resourceList}</div>
    </>
  );
};

export default ResourceList;
