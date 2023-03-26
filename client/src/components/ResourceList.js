import { useEffect } from "react";
import ResourceCard from "./ResourceCard";

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
      <div>{resourceList}</div>
    </>
  );
};

export default ResourceList;
