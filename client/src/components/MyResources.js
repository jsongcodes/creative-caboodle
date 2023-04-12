import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

const MyResources = () => {
  const [myResources, setMyResources] = useState([]);

  useEffect(() => {
    fetch("/my_resources")
      .then((response) => response.json())
      .then((data) => setMyResources(data));
  }, []);

  return (
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
      <h1 className="font" style={{ color: '#A13E70' }}>
        my resources
      </h1>

      {Array.from(Array).map((_, index) => (
        <Grid
          key={index}
          container
          direction="row"
          justifyContent="space-evenly"
          margin="10px"
          alignItems="center"
        >
          {myResources.map((resource) => (
            <Card
              key={resource.id}
              sx={{ width: 400, height: 350, margin: "15px" }}
            >
              <h1 className="cardTitle">{resource.title}</h1>
              <div className="description">link: {resource.website_url}</div>
              <div className="description">
                description: {resource.description}
              </div>
              <div className="description">likes: {resource.favorites}</div>

              <meta property="og:url" content={resource.website_url}></meta>
            </Card>
          ))}
        </Grid>
      ))}
    </Container>
  );
};

export default MyResources;
