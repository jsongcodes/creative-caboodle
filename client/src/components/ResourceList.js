import { useEffect } from "react";
import ResourceCard from "./ResourceCard";

const ResourceList = ({ topicId, userId, user, setResources, resources }) => {
  useEffect(() => {
    fetch(`/topics/${topicId}/resources`)
      .then((res) => res.json())
      .then((resources) => setResources(resources))
      //resources is an empty array
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
