import { Link } from "react-router-dom";

const TopicCard = ({topic}) => {
  const { id, title, description } = topic;
  return (
    <div>
        <Link to={`/topics/${id}`} id="topicCardTitle">
          {title}
        </Link>
        <p id="description">{description}</p>
    </div>
  );
};

export default TopicCard;
