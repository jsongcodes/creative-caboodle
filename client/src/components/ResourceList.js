import { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A13E70",
    },
    secondary: {
      main: "#A13E70",
    },
  },
});

const ResourceList = ({ setResources, resources, topics, setTopics }) => {
  const [inputForm, setInputForm] = useState("");

  useEffect(() => {
    fetch(`/resources`)
      .then((res) => res.json())
      .then((resources) => setResources(resources));
  }, []);

  const handleChange = (e) => {
    setInputForm(e.target.value);
  };

  const results = resources.filter((resource) => {
    return resource.title.toLowerCase().includes(inputForm.toLowerCase());
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          component="form"
          className="home-class"
          sx={{
            "& .MuiTextField-root": { m: 5, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              type="text"
              placeholder="search for a resource title..."
              value={inputForm}
              onChange={handleChange}
            />
          </div>
        </Box>
      </Container>
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
            {results.map((resource) => (
              <Card
                key={resource.id}
                sx={{ width: 400, height: 350, margin: "15px" }}
              >
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  setResources={setResources}
                  resources={resources}
                />
                <meta property="og:url" content={resource.website_url}></meta>
              </Card>
            ))}
          </Grid>
        ))}
      </div>
      <Box textAlign="center" sx={{mt: 5}}>
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
    </ThemeProvider>
  );
};

export default ResourceList;
