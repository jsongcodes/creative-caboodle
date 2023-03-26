import TopicCard from "./TopicCard";
import { useEffect } from "react";

const TopicList = ({topics, setTopics}) => {
  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then(setTopics);
  }, []);

  const topicItems = [...topics].map((topic) => {
    return <TopicCard key={topic.id} topic={topic}/>
  })
  
  return (
    <>
      <div>{topicItems}</div>
    </>
  );
};

export default TopicList;
