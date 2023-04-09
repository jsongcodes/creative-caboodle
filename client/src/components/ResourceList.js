import { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import ResourceForm from "./ResourceForm";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

const ResourceList = ({ setResources, resources }) => {
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

  // const resourceList = results.map((resource) => {
  //   return (

  //     <ResourceCard
  //       key={resource.id}
  //       resource={resource}
  //       setResources={setResources}
  //       resources={resources}
  //     />
  //   );
  // });

  return (
    <>
      {/* <form>
        <input
          className="comment-input"
          type="text"
          placeholder="search for a resource title..."
          value={inputForm}
          onChange={handleChange}
        ></input>
      </form> */}
      <Container component="main" maxWidth="xs">
        <Box
          component="form"
          className="home-class"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit}
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

      {/* <div>{resourceList}</div> */}
      <div className="home-class">
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
              <Card key={resource.id} sx={{ maxWidth: 330, margin: "15px" }}>
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
        <ResourceForm resources={resources} setResources={setResources} />
    </>
  );
};

export default ResourceList;
