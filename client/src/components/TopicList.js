import TopicCard from "./TopicCard";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
// import TopicForm from "./TopicForm";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TopicList = ({ topics, setTopics }) => {
  return (
    <>
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
      <Box textAlign="center" sx={{ mt: 5 }}>
        <Button
          href="/newresource"
          style={{
            backgroundColor: "#A13E70",
            padding: "10px 20px",
            color: "#FFFFFF",
            borderRadius: 5,
          }}
          variant="contained"
        >
          add resource
        </Button>
      </Box>
      {/* <TopicForm topics={topics} setTopics={setTopics}/> */}
    </>
  );
};

export default TopicList;
