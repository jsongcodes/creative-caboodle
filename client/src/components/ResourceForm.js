import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A13E70",
    },
    secondary: {
      main: "#A13E70",
    },
  },
  typography: {
    fontFamily: [],
  },
  background: {
    default: "#A13E70",
  },
});

const ResourceForm = ({ resources, setResources, topics, setTopics }) => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website_url, setWebsiteUrl] = useState("");
  const [topicIds, setTopicIds] = useState([]);
  const [favorites, setFavorites] = useState(0);

  const addNewResource = (newResource) => {
    setResources((resources) => [newResource, ...resources]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resource: {
          title,
          description,
          website_url,
          topic_ids: topicIds,
          favorites,
        },
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          setErrors(err.errors);
          alert(err.errors);
        });
      } else {
        res.json().then((data) => {
          addNewResource(data);
          setTitle("");
          setDescription("");
          setWebsiteUrl("");
          setTopicIds([]);
          setFavorites(0);
          console.log("Resource created:", data);
        });
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            mt: 10,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className="font"
            variant="h4"
            component="h2"
            sx={{ mb: 7, color: "#A13E70" }}
          >
            add a resource
          </Typography>
        </Container>
      </ThemeProvider>
      <Container
        sx={{
          mb: 5,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <TextField
              name="title"
              type="text"
              placeholder="Enter a title..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <TextField
              name="website_url"
              type="text"
              placeholder="Enter a website url..."
              value={website_url}
              onChange={(event) => setWebsiteUrl(event.target.value)}
            />
          </div>
          <div>
            <TextField
              name="description"
              type="text"
              placeholder="Enter a description..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <label htmlFor="topicIds">choose a topic</label>
          <select
            id="topicIds"
            multiple
            value={topicIds}
            onChange={(event) =>
              setTopicIds(
                Array.from(
                  event.target.selectedOptions,
                  (option) => option.value
                )
              )
            }
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </select>
          <Button
            onClick={handleSubmit}
            disabled={false}
            style={{
              backgroundColor: "#A13E70",
              padding: "10px 20px",
              color: "#FFFFFF",
              borderRadius: 5,
            }}
            variant="contained"
            type="submit"
          >
            submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ResourceForm;
