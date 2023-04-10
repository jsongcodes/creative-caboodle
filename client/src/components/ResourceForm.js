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
  // const [inputForm, setInputForm] = useState({
  //   title: "",
  //   description: "",
  //   website_url: "",
  //   topicIds: [],
  //   favorites: 0,
  //   // selectedTopics: []
  // });

  // const handleChange = (e) => {
  //   setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  // };

  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website_url, setWebsiteUrl] = useState("");
  const [topicIds, setTopicIds] = useState([]);
  const [favorites, setFavorites] = useState(0);
  //   const [selectedTopics, setSelectedTopics] = useState([]);

  const addNewResource = (newResource) => {
    setResources((resources) => [newResource, ...resources]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // inputForm
        resource: {
          title,
          description,
          website_url,
          // topic_ids: selectedTopics.map((topic) => topic.id),
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
          // setInputForm({ title: "", website_url: "", description: "" });
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

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   const selectedTopic = topics.find((topic) => topic.id === Number(value));

  //   if (event.target.checked) {
  //     setSelectedTopics([...selectedTopics, selectedTopic]);
  //   } else {
  //     setSelectedTopics(
  //       selectedTopics.filter((topic) => topic.id !== selectedTopic.id)
  //     );
  //   }
  // };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            mt: 10,
            // mb: 0,
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
<<<<<<< HEAD
        >
=======
        ><div>
        {/* <TextField
          name="topic_id"
          type="text"
          placeholder="Enter topic_id"
          value={inputForm.topicId}
          onChange={handleChange}
        />
         */}
         <p>topic id = {topicId}</p>
      </div>
>>>>>>> f2ecb87df0533f54d71da415a311079dd2ad975d
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
              // value={inputForm.description}
              // onChange={handleChange}
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

          {/* <label htmlFor="topics">Topics</label>
        {topics.map((topic) => (
          <div key={topic.id}>
            <input
              type="checkbox"
              id={`topic-${topic.id}`}
              value={topic.id}
              onChange={handleChange}
            />
            <label htmlFor={`topic-${topic.id}`}>{topic.title}</label>
          </div>
        ))} */}
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

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="website_url">websiteUrl</label>
        <input
          type="text"
          id="website_url"
          value={website_url}
          onChange={(event) => setWebsiteUrl(event.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Create Resource</button>
      </form> */}
    </>
  );
};

export default ResourceForm;
