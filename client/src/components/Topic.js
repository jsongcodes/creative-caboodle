import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ResourceForm from "./ResourceForm";

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

          {/* <Link href={`/newresource`} underline="none" className="post-card-title">
            add new resource
          </Link> */}

      </Grid>
      {/* <Button
              href={`/newresource`}
              style={{
                backgroundColor: "#A13E70",
                padding: "10px 20px",
                borderRadius: 5,
                color: "white"
              }}
              variant="contained"
            >
              add new resource
            </Button> */}
            {/* <ResourceForm
            topicId={topicInfo.id}/> */}
            <ResourceForm topicId={params.id}/>
    </div>
  );
};

export default Topic;
