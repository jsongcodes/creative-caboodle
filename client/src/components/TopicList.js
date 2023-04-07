import TopicCard from "./TopicCard";
import { useEffect } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const TopicList = ({ topics, setTopics }) => {
  useEffect(() => {
    fetch("/topics")
      .then((r) => r.json())
      .then(setTopics);
  }, []);

  // const topicItems = [...topics].map((topic) => {
  //   return <TopicCard key={topic.id} topic={topic}/>
  // })

  return (
    <>
      {/* <div>{topicItems}</div> */}
      <div>
        {Array.from(Array).map((_, index) => (
          <Grid
            key={index}
            container
            direction="row"
            justifyContent="space-evenly"
            margin="10px"
            alignItems="center"
          >
            {topics.map((topic) => (
              <Card key={topic.id} sx={{ maxWidth: 330, margin: "15px" }}>
                <CardMedia
                  component="img"
                  height="500"
                  width="300"
                  image={topic.image_url}
                  alt="topic"
                />
                <TopicCard key={topic.id} topic={topic} />
              </Card>
            ))}
          </Grid>
        ))}
      </div>
    </>
  );
};

export default TopicList;
