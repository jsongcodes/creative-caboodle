import { Link } from "react-router-dom";

const ResourceCard = ({ resource, topicId, user, resources }) => {
  const { id, video_url, website_url } = resource;

  return (
      <div>
        <Link
          to={`/topics/${topicId}/resources/${id}`}
          className="post-card-title"
        >
          {website_url}
        </Link>
        <Link to={video_url} className="post-card-title">
          {video_url}
        </Link>
      </div>
  );
};

export default ResourceCard;
