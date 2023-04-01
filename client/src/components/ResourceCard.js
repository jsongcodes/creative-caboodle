import { Link } from "react-router-dom";

const ResourceCard = ({ resource, topicId, resources, setResources }) => {
  const { id, title, description, website_url } = resource;

  return (
      <div>
        <Link to={`/resources/${id}`}
          className="post-card-title"
        >
          link: {website_url}
        </Link>
        <div>title: {title}</div>
        <div>description: {description}</div>
      </div>
  );
};

export default ResourceCard;