import { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";

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

const TopicForm = ({ topics, setTopics }) => {
  const [inputForm, setInputForm] = useState({
    title: "",
    image_url: "",
    description: "",
  });
  const history = useHistory();

  const addNewTopic = (newTopic) => {
    setTopics((topics) => [newTopic, ...topics]);
  };

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm),
    })
      .then((res) => res.json())
      .then((data) => {
        addNewTopic(data);
        setInputForm({ title: "", image_url: "", description: "" });
        history.push("/topics");
      });
  };

  return (
    <div>
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
            add a topic
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
              value={inputForm.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name="image_url"
              type="text"
              placeholder="Enter a image url..."
              value={inputForm.image_url}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name="description"
              type="text"
              placeholder="Enter a description..."
              value={inputForm.description}
              onChange={handleChange}
            />
          </div>
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
    </div>
  );
};

export default TopicForm;
