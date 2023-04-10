import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { id, title, description } = topic;
  return (
    <div>
      <Link to={`/topics/${id}`} className="cardTitle">
        {title}
      </Link>
      <p className="description">{description}</p>
    </div>
  );
};

export default TopicCard;
