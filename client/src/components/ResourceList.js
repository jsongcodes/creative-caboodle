import { useEffect } from "react";
import ResourceCard from "./ResourceCard";
import ResourceForm from "./ResourceForm";

const ResourceList = ({ setResources, resources }) => {
  useEffect(() => {
    fetch(`/resources`)
      .then((res) => res.json())
      .then((resources) => setResources(resources));
  }, []);

  const resourceList = [...resources].map((resource) => {
    return (
      <ResourceCard
        key={resource.id}
        resource={resource}
        setResources={setResources}
        resources={resources}
      />
    );
  });

  return (
    <>
      <div>{resourceList}</div>
      <ResourceForm resources={resources} setResources={setResources} />
    </>
  );
};

export default ResourceList;
