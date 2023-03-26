import { Link } from "react-router-dom";

const TopicCard = ({topic}) => {
  const { id, title, image_url, description } = topic;
  return (
    <div>
        <Link to={`/topics/${id}`} className="post-card-title">
          {title}
        </Link>
        <img src={image_url} className="postimage" alt="post" />
        <p className="post-card-description">{description}</p>

    </div>
  );
};

export default TopicCard;
