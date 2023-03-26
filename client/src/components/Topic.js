import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResourceList from "./ResourceList";
import ResourceForm from "./ResourceForm";

const Topic = (userId, user
  // , resources, setResources
  ) => {
  const [topicInfo, setTopicInfo] = useState([]);
  //do i need to create a separate resources state?
  const [resources, setResources] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(`/topics/${params.id}`)
      .then((res) => res.json())
      .then(setTopicInfo);
  }, [params.id]);

  return (
    <div className="main-container">
      <div className="single-post-item">
        <h3 className="post-card-title">{topicInfo.title}</h3>
        <img src={topicInfo.image_url} className="postimage" alt="post" />
        <p className="post-card-description">{topicInfo.description}</p>
      </div>

      <ResourceList
        topicId={params.id}
        userId={userId}
        user={user}
        setResources={setResources}
        resources={resources}
      />
      <ResourceForm
        topicId={params.id}
        userId={userId}
        resources={resources}
        setResources={setResources}
      />
    </div>
  );
};

export default Topic;
