import { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import ResourceForm from "./ResourceForm";

const ResourceList = ({ setResources, resources }) => {
  const [inputForm, setInputForm] = useState("");

  useEffect(() => {
    fetch(`/resources`)
      .then((res) => res.json())
      .then((resources) => setResources(resources))
  }, []);

  const handleChange = (e) => {
    setInputForm(e.target.value);
  };

  // const results = resources.filter(resource => {
  //   return resource.title.toLowerCase().includes(inputForm.toLowerCase());
  // })



  // const results = resources.filter((resource) => {
  //   if (resource.title.includes(inputForm)){
  //     return resource
  //   }
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const results = resources.filter((resource) => {
  //   //   if (resource.title.includes(inputForm)){
  //   //     return resource
  //   //   }
  //   // });
  //   // console.log(results)
  //   // return results 
  // };

  const resourceList = resources.map((resource) => {
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
      <form 
      // onSubmit={handleSubmit}
      >
        <input
          className="comment-input"
          type="text"
          placeholder="search for a resource title..."
          value={inputForm}
          onChange={handleChange}
        ></input>
      </form>
      <div>{resourceList}</div>
      <ResourceForm resources={resources} setResources={setResources} />
    </>
  );
};

export default ResourceList;
