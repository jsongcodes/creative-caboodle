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

const ResourceForm = ({ topicId, resources, setResources, resourceId }) => {
  const [inputForm, setInputForm] = useState({
    title: "",
    website_url: "",
    description: "",
    // topicId
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const addNewResource = (newResource) => {
    setResources((resources) => [newResource, ...resources]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({inputForm
    //     title: title,
    //   website_url: website_url,
    // description: description,
    // resources_topic_attributes: resources_topic.map((resources_topic)
    // )
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
          setInputForm({ title: "", website_url: "", description: "" });
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

      {/* <Box
        component="section"
        // sx={{
        //   display: "flex",
        //   bgcolor: "#FFF6FB",
        //   height: "100%"
        // }}
      > */}
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
              name="website_url"
              type="text"
              placeholder="Enter a website url..."
              value={inputForm.website_url}
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
              borderRadius: 5
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
