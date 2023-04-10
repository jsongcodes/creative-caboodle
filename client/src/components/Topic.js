import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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
    <div className="description">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        margin="10px"
        alignItems="center"
      >
        <Card sx={{ width: 600, margin: "15px" }}>
          <h3 className="cardTitle">{topicInfo.title}</h3>
          <CardMedia
              component="img"
              height="500"
              width="300"
              image={topicInfo.image_url}
              alt="topic info"
            />
          <p className="description">{topicInfo.description}</p>
          </Card>
      </Grid>
    </div>
  );
};

export default Topic;
