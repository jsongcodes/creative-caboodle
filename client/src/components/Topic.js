import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Topic = ({ resources, setResources }) => {
  const [topicInfo, setTopicInfo] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(`/topics/${params.id}`)
      .then((res) => res.json())
      .then(setTopicInfo)
      .then(console.log("topicInfo: ", topicInfo));
  }, [params.id]);

  return (
    <div className="main-container">
      <div className="single-post-item">
        <h3 className="post-card-title">{topicInfo.title}</h3>
        <img src={topicInfo.image_url} className="postimage" alt="post" />
        <p className="post-card-description">{topicInfo.description}</p>
      </div>
      <Link to={`/newresource`}
          className="post-card-title"
        >
          add new resource
    
        </Link>
    </div>
  );
};

export default Topic;
