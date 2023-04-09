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
      main: "#FFF6FB",
    },
    secondary: {
      main: "#A13E70",
    },
  },
  typography: {
    fontFamily: [],
  },
  background: {
    default: "#A13E70"
  },
});

const ResourceForm = ({ topicId, resources, setResources }) => {
  const [inputForm, setInputForm] = useState({
    title: "",
    website_url: "",
    description: "",
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
      body: JSON.stringify(inputForm),
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
        <Box
          component="section"
          // sx={{
          //   display: "flex",
          //   bgcolor: "#FFF6FB",
          //   height: "100%"
          // }}
        >
          <Container
            sx={{
              mt: 10,
              mb: 15,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="https://gitlab.create-ion.at/lt/material-ui/-/raw/v4.0.2/static/themes/onepirate/productCurvyLines.png"
              alt="curvy lines"
              sx={{
                pointerEvents: "none",
                position: "absolute",
                top: -180,
                opacity: 0.7,
              }}
            />

            <Typography
              className="font"
              variant="h4"
              component="h2"
              sx={{ mb: 7, color: "#A13E70" }}
            >
              add a resource
            </Typography>
            <div>
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
                  size="small"
                  variant="filledTonal"
                  type="submit"
                >
                  submit
                </Button>
              </Box>
            </div>
          </Container>
        </Box>
        {/* <form className="create-comment" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            className="comment-input"
            name="website_url"
            type="text"
            placeholder="Enter a website url..."
            value={inputForm.website_url}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            className="comment-input"
            name="description"
            type="text"
            placeholder="Enter a description..."
            value={inputForm.description}
            onChange={handleChange}
          ></input>
        </div>

        <input className="submit-button" type="submit" value="Resource" />
      </form> */}
      </ThemeProvider>
    </>
  );
};

export default ResourceForm;
